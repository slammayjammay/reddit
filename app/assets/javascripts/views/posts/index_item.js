// domain links to real reddit /domain
// link title links to real reddit post
// user links to actual user's page

Reddit.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/index_item'],
  className: 'posts-index-item',

  initialize: function (options) {
    this.index = options.index;
  },

  render: function () {
    var defaults = ['self', 'nsfw', 'default'];
    var thumbnail;
    if (defaults.indexOf(this.model.get('data').thumbnail) > -1) {
      thumbnail = 'https://www.reddit.com/static/self_default2.png';
    } else if (this.model.get('data').thumbnail !== '') {
      thumbnail = this.model.get('data').thumbnail;
    }

    var content = this.template({
      post: this.model,
      thumbnail: thumbnail,
      index: this.index,
      num_comments: this.model.get('data').num_comments
    });
    this.$el.html(content);
    return this;
  }
});
