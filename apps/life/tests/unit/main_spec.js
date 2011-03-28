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
    Life.main();
  });

  afterEach(function(){
    Life.mainStatechart.gotoState('endGame');
  });

  it('initializes the mainStatechart', function() {
    var currentStates = Life.mainStatechart.get('currentStates');
    expect(currentStates.length).toBe(1);
    expect(currentStates[0].get('name')).toBe('setUp');
  });
});