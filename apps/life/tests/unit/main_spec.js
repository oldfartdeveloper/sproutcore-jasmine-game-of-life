/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 8:43:04 PM
 * To change this template use File | Settings | File Templates.
 */
describe('Life.main', function(){
  var statechartSpy;

  beforeEach(function() {
    statechartSpy = spyOn(Life.mainStatechart, 'setUp');
    Life.main();
  });

  afterEach(function(){
    Life.mainStatechart.gotoState('endGame');
  });

  it('initializes the mainStatechart', function() {
    expect(statechartSpy).toHaveBeenCalled();
  });
});