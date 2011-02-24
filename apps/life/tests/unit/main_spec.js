/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 8:43:04 PM
 * To change this template use File | Settings | File Templates.
 */
describe('Life.main', function(){
  var createsGameSpy, assignsBoardSpy, board;

  beforeEach(function(){
    board = 'GameBoard';
    spyOn(Life, 'getPath').andReturn({append: function(){}});
    createsGameSpy = spyOn(Life.GameBoard, 'create').andReturn(board);
    assignsBoardSpy = spyOn(Life.gameBoardController, 'set');
    Life.main();
  });

  it('creates a board for the game with 10 rows', function() {
    expect(createsGameSpy).toHaveBeenCalledWith({rows: 10});
  });

  it('assigns the created board for the view', function(){
    expect(assignsBoardSpy).toHaveBeenCalledWith('content', board);
  });
});