// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializejson
//= require jquery.timeago
//= require jquery.ajax-cross-origin.min
//= require underscore
//= require backbone
//= require composite_view
//= require reddit
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(document).ready(function() {
  $(document).mouseup(function (event) {
    var mySubreddits = $('.my-subreddits');
    var container = $('.my-subreddits-dropdown');

    if (!container.is(event.target) && !mySubreddits.is(event.target) &&
          container.has(event.target).length === 0) {
      container.css('display', 'none');
    }
  });

  $('.my-subreddits').click(function () {
    if ($('.my-subreddits-dropdown').css('display') === 'none') {
      $('.my-subreddits-dropdown').css('display', 'block');
    } else {
      $('.my-subreddits-dropdown').css('display', 'none');
    }
  });

  $('.gold-container').mouseenter(function () {
    if (window.goldHideId) {
      clearTimeout(window.goldHideId);
    }
    window.goldShowId = setTimeout(function (){
      $('.gold-dropdown').css('visibility', 'visible');
      $('.gold-dropdown').css('opacity', 1);
      $('.gold-dropdown').css('margin-top', '5px');
    }, 200);
  });

  $('.gold-container').mouseleave(function () {
    if (window.goldShowId) {
      clearTimeout(window.goldShowId);
    }
    window.goldHideId = setTimeout(function () {
      $('.gold-dropdown').css('visibility', 'hidden');
      $('.gold-dropdown').css('opacity', 0);
      $('.gold-dropdown').css('margin-top', '0px');
    }, 800);
  });
});
