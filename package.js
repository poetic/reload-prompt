Package.describe({
  name: 'poetic:reload-prompt',
  version: '0.0.1',
  summary: 'Handles hotcode reload, provides prompt.',
  git: 'https://github.com/poetic/reload-prompt',
  documentation: 'README.md'
});

Cordova.depends({
  'cordova-plugin-dialogs': '1.1.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('mdg:reload-on-resume@1.0.4');
  api.addFiles('reload-prompt.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('poetic:reload-prompt');
  api.addFiles('reload-prompt-tests.js');
});
