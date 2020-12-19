#!/usr/bin/env node

/*
 * This script fetches contributors and writes their usernames and url
 * to the Contributors.md file.
 */

const fetch = require('node-fetch');
const fs = require('fs');

// Each call to the endpoint returns 30 contributors. In total we'll fetch
// PAGE_COUNT * 30 contributors.
const PAGE_COUNT = 4;
const FILE_NAME = "Contributors.md";
const BASE_URL = "https://api.github.com/repos/sb2nov/mac-setup/contributors?page=";
const HEADER = `# Contributors

Thank you everyone that have contributed to creating this awesome guide!

`;

const validateWorkingDirectory = () => {
  const cwd = process.cwd();

  if (!cwd.endsWith("/mac-setup")) {
    throw new Error("Script must be run from repo root");
  }
};

const fetchContributor = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchContributors = () => {
  return [...Array(PAGE_COUNT).keys()]
    .map(i => i + 1)
    .map(i => `${BASE_URL}${i}`)
    .map(fetchContributor);
};

// Validate username to not contain anything naughty
const validateUsername = contributor => {
  const username = contributor.login;

  return !username.includes("<script");
};

// Ignore users that are not human, such as bots
const ignoreNonHumanUsers = contributor => {
  const username = contributor.login;
  const nonHumanUsernames = ["dependabot[bot]"];

  return !nonHumanUsernames.includes(username);
};

const parseContributors = contributors => {
  return contributors
    .flatMap(c => c)
    .filter(validateUsername)
    .filter(ignoreNonHumanUsers)
    .map(c => `- [${c.login}](${c.html_url})`)
    .join('\n');
};

const writeToFile = content =>
  fs.writeFile(FILE_NAME, content, err => {
    if (err) throw new Error(err);
  });

const run = promises =>
  Promise.all(promises)
    .then(contributors => {
      const contributorsMarkdown = parseContributors(contributors);
      const fileContent = HEADER + contributorsMarkdown + '\n';

      writeToFile(fileContent);
    });

validateWorkingDirectory();

const promises = fetchContributors();
run(promises);
