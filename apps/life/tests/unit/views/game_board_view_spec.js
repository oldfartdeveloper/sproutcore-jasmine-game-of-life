/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 8:17:31 PM
 * To change this template use File | Settings | File Templates.
 */
describe('Life.GameBoard', function(){
  describe('#render', function(){
    beforeEach(function(){
      //board = Life.GameBoard.create({rows: 10});
      view = Life.GameBoardView.create({rows: 10});
      view.createLayer();
    });
    it('renders the rows of the game board', function(){
      expect(view.$('.row').length).toBe(10);
    });
  });

  describe('when I click on a box', function(){
    it('the box turns blue', function(){
      expect()
    });
  });
});