#!/usr/bin/env node

/*
 * This script fetches contributors and writes their usernames, profile pictures, 
 * and URLs to the Contributors.md file.
 */

// Use native fetch in Node.js 18+ or fallback to node-fetch
const fetch = globalThis.fetch || require('node-fetch');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  PAGE_COUNT: 6, // Increased to get more contributors
  FILE_NAME: "website/docs/contributors.md",
  BASE_URL: "https://api.github.com/repos/sb2nov/mac-setup/contributors?page=",
  MIN_CONTRIBUTIONS: 1, // Minimum contributions to be included
  AVATAR_SIZE: 80, // Size of GitHub avatar images (larger for better visibility)
  CONTRIBUTORS_PER_ROW: 8, // Number of contributors per row in the grid
};

const HEADER = `---
title: Contributors
---

# Contributors

Thank you to everyone who has contributed to creating this awesome guide! 🎉

This project exists thanks to all the people who contribute:

`;

const FOOTER = `

---

*Want to contribute? Check out our [contribution guidelines](https://github.com/sb2nov/mac-setup/blob/main/.github/CONTRIBUTION_TEMPLATE.md) and help make this guide even better!*
`;

/**
 * Validates that the script is run from the correct directory
 */
const validateWorkingDirectory = async () => {
  const cwd = process.cwd();
  
  try {
    await fs.access(path.join(cwd, 'package.json'));
  } catch {
    throw new Error("Script must be run from the repository root directory");
  }
};

/**
 * Fetches data from a URL with error handling and rate limiting respect
 */
const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'mac-setup-contributors-script',
          // Add GitHub token if available for higher rate limits
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        }
      });

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('Rate limit hit, waiting before retry...');
          await new Promise(resolve => setTimeout(resolve, 2000));
          continue;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (err) {
      console.warn(`Attempt ${i + 1} failed:`, err.message);
      if (i === retries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

/**
 * Fetches all contributors from GitHub API
 */
const fetchContributors = async () => {
  console.log('Fetching contributors...');
  const promises = [];
  
  for (let page = 1; page <= CONFIG.PAGE_COUNT; page++) {
    const url = `${CONFIG.BASE_URL}${page}&per_page=100`;
    promises.push(fetchWithRetry(url));
  }
  
  const results = await Promise.all(promises);
  const allContributors = results.flatMap(contributors => contributors || []);
  
  console.log(`Fetched ${allContributors.length} contributors`);
  return allContributors;
};

/**
 * Validates and sanitizes contributor data
 */
const isValidContributor = (contributor) => {
  const { login, html_url, avatar_url, contributions } = contributor;
  
  // Basic validation
  if (!login || !html_url || !avatar_url) return false;
  
  // Security: prevent script injection
  if (login.includes('<script') || login.includes('javascript:')) return false;
  
  // Filter out bots and non-human users
  const botPatterns = [
    'dependabot[bot]',
    'github-actions[bot]',
    'renovate[bot]',
    'greenkeeper[bot]',
    'codecov[bot]'
  ];
  
  if (botPatterns.some(pattern => login.includes(pattern))) return false;
  
  // Filter by minimum contributions
  if (contributions < CONFIG.MIN_CONTRIBUTIONS) return false;
  
  return true;
};

/**
 * Generates Markdown table layout for contributors with profile pictures
 */
const generateContributorGrid = (contributors) => {
  const sortedContributors = contributors
    .filter(isValidContributor)
    .sort((a, b) => b.contributions - a.contributions); // Sort by contributions (highest first)

  if (sortedContributors.length === 0) {
    return 'No contributors found.';
  }

  const COLUMNS = 6; // Number of contributors per row (reduced for better mobile experience)
  let markdown = '';
  
  // Add CSS class for styling
  markdown += '<div class="contributors-table">\n\n';
  
  // Create table header (empty headers that will be hidden by CSS)
  markdown += '|' + '   |'.repeat(COLUMNS) + '\n';
  markdown += '|' + '---|'.repeat(COLUMNS) + '\n';
  
  // Group contributors into rows
  for (let i = 0; i < sortedContributors.length; i += COLUMNS) {
    const row = sortedContributors.slice(i, i + COLUMNS);
    const rowCells = [];
    
    for (let j = 0; j < COLUMNS; j++) {
      if (j < row.length) {
        const { login, html_url, avatar_url, contributions } = row[j];
        const avatarUrl = `${avatar_url}&s=${CONFIG.AVATAR_SIZE}`;
        
        // Create cell with avatar and username
        const cell = `[![${login}](${avatarUrl})](${html_url})<br/>[${login}](${html_url})`;
        rowCells.push(cell);
      } else {
        // Empty cell for incomplete rows
        rowCells.push(' ');
      }
    }
    
    markdown += `| ${rowCells.join(' | ')} |\n`;
  }
  
  // Close the div wrapper
  markdown += '\n</div>\n';
  
  // Add summary statistics
  const totalContributions = sortedContributors.reduce((sum, c) => sum + c.contributions, 0);
  markdown += `\n**${sortedContributors.length} contributors** • **${totalContributions} total contributions**\n`;
  
  return markdown;
};

/**
 * Writes content to file with error handling
 */
const writeToFile = async (content) => {
  try {
    // Ensure directory exists
    const dir = path.dirname(CONFIG.FILE_NAME);
    await fs.mkdir(dir, { recursive: true });
    
    await fs.writeFile(CONFIG.FILE_NAME, content, 'utf8');
    console.log(`✅ Successfully wrote contributors to ${CONFIG.FILE_NAME}`);
  } catch (err) {
    throw new Error(`Failed to write file: ${err.message}`);
  }
};

/**
 * Checks for GitHub token and provides instructions if missing
 */
const checkGitHubToken = () => {
  if (!process.env.GITHUB_TOKEN) {
    console.warn('⚠️  No GitHub token found!');
    console.warn('');
    console.warn('To avoid rate limiting, please set up a GitHub Personal Access Token:');
    console.warn('');
    console.warn('1. Go to: https://github.com/settings/tokens/new');
    console.warn('2. Generate a token with these scopes:');
    console.warn('   - public_repo (or repo if you need private repo access)');
    console.warn('   - read:user');
    console.warn('3. Set the token as an environment variable:');
    console.warn('   export GITHUB_TOKEN=your_token_here');
    console.warn('');
    console.warn('Without a token, you may hit rate limits (60 requests/hour).');
    console.warn('With a token, you get 5,000 requests/hour.');
    console.warn('');
    console.warn('Continuing without token...');
    console.warn('');
  } else {
    console.log('✅ GitHub token found - using authenticated requests');
  }
};

/**
 * Main execution function
 */
const run = async () => {
  try {
    console.log('🚀 Starting contributors generation...');
    
    checkGitHubToken();
    
    await validateWorkingDirectory();
    
    const contributors = await fetchContributors();
    
    if (!contributors || contributors.length === 0) {
      throw new Error('No contributors data received');
    }
    
    console.log('📝 Generating contributor grid...');
    const contributorGrid = generateContributorGrid(contributors);
    
    const fileContent = HEADER + contributorGrid + FOOTER;
    
    await writeToFile(fileContent);
    
    console.log('✨ Contributors page generated successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('\n⚠️  Process interrupted');
  process.exit(1);
});

// Run the script
run();
