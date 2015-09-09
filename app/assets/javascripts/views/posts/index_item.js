// TODO: domain links to real reddit /domain
// TODO: link title links to real reddit post
// TODO: user links to actual user's page
// TODO: change thumbnails to nsfw thumbnail
// TODO: add embedded videos and pictures

Reddit.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/index_item'],
  className: 'posts-index-item',

  initialize: function (options) {
    this.index = options.index;
  },

  render: function () {
    var defaults = ['self', 'nsfw', 'default'];
    var thumbnail;
    var paddingLeft;
    var score;

    if (defaults.indexOf(this.model.get('data').thumbnail) > -1) {
      thumbnail = 'https://www.reddit.com/static/self_default2.png';
      paddingLeft = '151px;';
    } else if (this.model.get('data').thumbnail !== '') {
      thumbnail = this.model.get('data').thumbnail;
      paddingLeft = '151px;';
    } else {
      paddingLeft = '76px';
    }

    if (this.model.get('data').hide_score) {
      score = '•';
    } else {
      score = this.model.get('data').score;
    }

    var content = this.template({
      post: this.model,
      score: score,
      thumbnail: thumbnail,
      paddingLeft: paddingLeft,
      index: this.index,
      num_comments: this.model.get('data').num_comments
    });
    this.$el.html(content);
    return this;
  }
});
