import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'system-preferences',
    'xcode',
    {
      type: 'category',
      label: 'Homebrew',
      items: ['homebrew/index', 'homebrew/usage', 'homebrew/cask'],
    },
    {
      type: 'category',
      label: 'iTerm2',
      items: ['iterm/index', 'iterm/zsh', 'iterm/tree', 'iterm/fzf', 'iterm/ack'],
    },
    {
      type: 'category',
      label: 'Git',
      items: ['git/index', 'git/gitignore'],
    },
    'bash-completion',
    'vim',
    'emacs',
    {
      type: 'category',
      label: 'Sublime Text',
      items: ['sublime-text/index', 'sublime-text/preferences', 'sublime-text/packages', 'sublime-text/plugins', 'sublime-text/sublime-linter'],
    },
    'visual-studio-code',
    'jetbrains-ides',
    'postgresql',
    {
      type: 'category',
      label: 'Python',
      items: ['python/index', 'python/pip', 'python/virtualenv', 'python/numpy', 'python/ipython'],
    },
    'mysql',
    'cpp',
    {
      type: 'category',
      label: 'Java',
      items: ['java/index', 'java/sdkman'],
    },
    'scala',
    {
      type: 'category',
      label: 'Ruby',
      items: ['ruby/index', 'ruby/rubygems'],
    },
    'rust',
    'nodejs',
    'go',
    'heroku',
    'vagrant',
    {
      type: 'category',
      label: 'Docker',
      items: ['docker/index', 'docker/useful-commands', 'docker/tips-and-tricks'],
    },
    'latex',
    {
      type: 'category',
      label: 'Other Apps',
      items: ['apps/index', 'apps/octave', 'apps/settings'],
    },
    'security',
    'references',
    'contributors',
  ],
};

export default sidebars;
