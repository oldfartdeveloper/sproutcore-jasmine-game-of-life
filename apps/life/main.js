// ==========================================================================
// Project:   Life
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Life */

Life.main = function main() {
  Life.getPath('mainPage.mainPane').append();
  var board = Life.GameBoard.create({rows: 10, cols: 10});
  Life.gameBoardController.set('content', board);
} ;

function main() { Life.main(); }
