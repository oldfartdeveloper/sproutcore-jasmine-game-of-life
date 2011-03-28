sc_require('statecharts/main_statechart');
sc_require('models/game');
sc_require('resources/main_page');

// ==========================================================================
// Project:   Life
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Life */

Life.main = function main() {
  console.log('Before initStatechart');
  Life.mainStatechart.initStatechart();
  console.log('After initStatechart');
};

function main() { Life.main(); }
