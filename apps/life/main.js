sc_require('statecharts/main_statechart');
sc_require('models/game');
sc_require('resources/main_page');

// Project:   Life
// Copyright: ©2011 My Company, Inc.
//
/*globals Life */

Life.main = function main() {
  Life.mainStatechart.initStatechart();
};

function main() { Life.main(); }
