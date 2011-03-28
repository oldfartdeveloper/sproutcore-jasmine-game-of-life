/**
 * Created by Scott.
 * User: scott
 * Date: 3/26/11
 * Time: 10:01 PM
 */
Life.CellView = SC.View.extend(SC.ContentDisplay, {
  contentDisplayProperties: 'row column'.w(),
  layout: function() {
  var cell = this.get('content');
  }.property('content').cacheable(),

  render: function(context, firstTime) {
    var content = this.get('content');
    this._renderClasses(context, firstTime);
    this._renderContent(context, firstTime);
    sc_super();
  }
})
