/**
 * Created by scott.
 * Date: 3/26/11
 * Time: 6:28 PM
 */
console.log('Before creating statechart');

Life.mainStatechart = Ki.Statechart.create({

  initialState: 'setUp',

  setUp: Ki.State.design({
    enterState: function() {

    }
  }),

  running: Ki.State.design({
    enterState: function() {

    }
  }),

  stopped: Ki.State.design({
    enterState: function() {
      
    }
  }),

  endGame: Ki.State.design({
    enterState: function() {
      
    }
  })
});
console.log('After creating statechart');
