/**
 * Created by scott.
 * Date: 3/26/11
 * Time: 6:28 PM
 */
Life.mainStatechart = Ki.Statechart.create({

  initialState: 'setUp',

  setUp: Ki.State.design({
    enterState: function() {

    }
  }),

  running: Ki.State.design = Ki.Statechart.create({
    enterState: function() {

    }
  }),

  stopped: Ki.State.design = Ki.Statechart.create({
    enterState: function() {
      
    }
  })
})