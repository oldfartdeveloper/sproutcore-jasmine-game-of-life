/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 7:48:03 PM
 * To change this template use File | Settings | File Templates.
 */

describe('Viewing the board', function() {

  describe('Given a board', function() {

    beforeEach(function() {
      board = Life.GameBoard.create({rows:10, columns:10});
    });

    describe('When I launch the game', function() {
      beforeEach(function() {
        SC.RunLoop.begin();
        Life.main();
        SC.RunLoop.end();
      });

      it('Then I should see the correct number of rows', function() {
        expect(SC.CoreQuery('.row').length).toBe(10);
      });
    });
  });
});
