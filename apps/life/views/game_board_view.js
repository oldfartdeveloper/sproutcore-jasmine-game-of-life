/**
 * Created by .
 * User: scott
 * Date: Feb 10, 2011
 * Time: 8:15:16 PM
 * To change this template use File | Settings | File Templates.
 */
Life.GameBoardView = SC.View.extend({
  displayProperties: 'rows'.w(),
  render: function(context, firstTime) {
    var rows = this.get('rows') ? this.get('rows') : 0;
//    console.log(content);
//    console.log('Inside if');
//    var rows = content.get('rows');
    for(var i = 0; i < rows; i++) {
      context.push('<div class="row"></div>');
    }
  }
});