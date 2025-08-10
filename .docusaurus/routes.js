import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mac-setup/search',
    component: ComponentCreator('/mac-setup/search', '4c1'),
    exact: true
  },
  {
    path: '/mac-setup/',
    component: ComponentCreator('/mac-setup/', '5d3'),
    routes: [
      {
        path: '/mac-setup/',
        component: ComponentCreator('/mac-setup/', '798'),
        routes: [
          {
            path: '/mac-setup/',
            component: ComponentCreator('/mac-setup/', '449'),
            routes: [
              {
                path: '/mac-setup/apps/',
                component: ComponentCreator('/mac-setup/apps/', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/apps/octave',
                component: ComponentCreator('/mac-setup/apps/octave', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/apps/settings',
                component: ComponentCreator('/mac-setup/apps/settings', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/bash-completion',
                component: ComponentCreator('/mac-setup/bash-completion', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/contributors',
                component: ComponentCreator('/mac-setup/contributors', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/cpp',
                component: ComponentCreator('/mac-setup/cpp', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/docker/',
                component: ComponentCreator('/mac-setup/docker/', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/docker/tips-and-tricks',
                component: ComponentCreator('/mac-setup/docker/tips-and-tricks', 'afe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/docker/useful-commands',
                component: ComponentCreator('/mac-setup/docker/useful-commands', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/emacs',
                component: ComponentCreator('/mac-setup/emacs', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/git/',
                component: ComponentCreator('/mac-setup/git/', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/git/gitignore',
                component: ComponentCreator('/mac-setup/git/gitignore', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/go',
                component: ComponentCreator('/mac-setup/go', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/heroku',
                component: ComponentCreator('/mac-setup/heroku', 'b91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/homebrew/',
                component: ComponentCreator('/mac-setup/homebrew/', '3b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/homebrew/cask',
                component: ComponentCreator('/mac-setup/homebrew/cask', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/homebrew/usage',
                component: ComponentCreator('/mac-setup/homebrew/usage', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/iterm/',
                component: ComponentCreator('/mac-setup/iterm/', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/iterm/ack',
                component: ComponentCreator('/mac-setup/iterm/ack', 'e7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/iterm/fzf',
                component: ComponentCreator('/mac-setup/iterm/fzf', '34b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/iterm/tree',
                component: ComponentCreator('/mac-setup/iterm/tree', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/iterm/zsh',
                component: ComponentCreator('/mac-setup/iterm/zsh', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/java/',
                component: ComponentCreator('/mac-setup/java/', '487'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/java/sdkman',
                component: ComponentCreator('/mac-setup/java/sdkman', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/jetbrains-ides',
                component: ComponentCreator('/mac-setup/jetbrains-ides', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/latex',
                component: ComponentCreator('/mac-setup/latex', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/mysql',
                component: ComponentCreator('/mac-setup/mysql', '306'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/nodejs',
                component: ComponentCreator('/mac-setup/nodejs', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/postgresql',
                component: ComponentCreator('/mac-setup/postgresql', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/python/',
                component: ComponentCreator('/mac-setup/python/', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/python/ipython',
                component: ComponentCreator('/mac-setup/python/ipython', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/python/numpy',
                component: ComponentCreator('/mac-setup/python/numpy', '8cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/python/pip',
                component: ComponentCreator('/mac-setup/python/pip', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/python/virtualenv',
                component: ComponentCreator('/mac-setup/python/virtualenv', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/references',
                component: ComponentCreator('/mac-setup/references', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/ruby/',
                component: ComponentCreator('/mac-setup/ruby/', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/ruby/rubygems',
                component: ComponentCreator('/mac-setup/ruby/rubygems', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/rust',
                component: ComponentCreator('/mac-setup/rust', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/scala',
                component: ComponentCreator('/mac-setup/scala', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/security',
                component: ComponentCreator('/mac-setup/security', 'a5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/sublime-text/',
                component: ComponentCreator('/mac-setup/sublime-text/', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/sublime-text/packages',
                component: ComponentCreator('/mac-setup/sublime-text/packages', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/sublime-text/plugins',
                component: ComponentCreator('/mac-setup/sublime-text/plugins', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/sublime-text/preferences',
                component: ComponentCreator('/mac-setup/sublime-text/preferences', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/sublime-text/sublime-linter',
                component: ComponentCreator('/mac-setup/sublime-text/sublime-linter', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/system-preferences',
                component: ComponentCreator('/mac-setup/system-preferences', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/vagrant',
                component: ComponentCreator('/mac-setup/vagrant', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/vim',
                component: ComponentCreator('/mac-setup/vim', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/visual-studio-code',
                component: ComponentCreator('/mac-setup/visual-studio-code', '927'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/xcode',
                component: ComponentCreator('/mac-setup/xcode', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mac-setup/',
                component: ComponentCreator('/mac-setup/', 'eb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
