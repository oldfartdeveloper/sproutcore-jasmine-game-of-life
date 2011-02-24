// ==========================================================================
// Project:   Life - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Life */

// This page describes the main user interface for your application.  
Life.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'gameBoard'.w(),
    gameBoard: Life.GameBoardView.design({
      rowsBinding: 'Life.gameBoardController.rows'
    })
  })

});
