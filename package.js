
// THIS FILE WAS AUTO-GENERATED BY IMPACT.
// DO NOT MODIFY THIS FILE!
// Write to package.impact.js instead.

Package.describe({
  summary:  'Impact (alpha)',
  name:     'impact:theme-layouts',
  version:  '0.1.0',
});

Package.on_use(function (api, where) {
  
  api.use(['impact:impact'], ['client', 'server']);
  api.imply(['impact:impact'], ['client', 'server']);

  //-- IMPACT: FILES --//

  api.addFiles([
    "client/classic/classic.html",
    "client/panels/panels.html",
    "client/zen/zen.html",
    "client/panels/panels.less",
    "client/zen/zen_.less",
    "client/zen/zen_bar.less",
    "client/zen/zen_main.less",
    "client/preamble.lessimport",
    "client/classic/classic.js",
    "client/panels/panels.js",
    "client/zen/zen.js",
  ], "client");


});
