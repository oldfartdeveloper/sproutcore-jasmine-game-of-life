/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 8:15:16 PM
 */
Life.GameBoardView = SC.View.extend({
  displayProperties: 'rows cols'.w(),
  render: function(context, firstTime) {
    var rows = this.get('rows') ? this.get('rows') : 0;
    var cols = this.get('cols') ? this.get('cols') : 0;
//    console.log(content);
//    console.log('Inside if');
//    var rows = content.get('rows');
    for (var i = rows; i > 0; i--) {
      for (var j = cols - 1; j > 0; j--) {
        context.push('<span class="row"/>');
      }
      context.push('<div class="row"/>');
    }
  }
});