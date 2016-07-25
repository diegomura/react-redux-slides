// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    backdrop = require('bespoke-backdrop'),
    nebula = require('bespoke-theme-nebula'),
    fullscreen = require('bespoke-fullscreen'),
    substeps = require('bespoke-substeps/dom'),
    progress = require('bespoke-progress'),
    $ = require('jquery');

// Bespoke.js
var deck = bespoke.from('article', [
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  nebula(),
  fullscreen(),
  substeps(),
  progress()
]);

// React compelling
deck.on('activate', function(event) {
  if ($(event.slide).find('.compelling').length > 0) {
    var parent = $('.compelling');

    parent.removeClass('declarative');
    parent.removeClass('predictable');
    parent.removeClass('confidence');
    parent.removeClass('reliability');

    switch (parent.find('.active').length) {
      case 0:
        parent.addClass('declarative');
        break
      case 1:
        parent.addClass('predictable');
        break;
      case 2:
        parent.addClass('confidence');
        break;
      case 3:
        parent.addClass('reliability');
        break;
    }
  }

  return true;
});

// Virtual DOM
deck.on('activate', function(event) {
  if ($(event.slide).hasClass('virtual-dom')) {
    var parent = $('.virtual-dom');
    var title  = $('.virtual-dom-steps');

    parent.removeClass('step-1');
    parent.removeClass('step-2');
    parent.removeClass('step-3');
    parent.removeClass('step-4');
    parent.removeClass('step-5');
    title.html('');

    switch (parent.find('.active').length) {
      case 0:
        parent.addClass('step-1');
        break
      case 1:
        parent.addClass('step-2');
        title.html('1. New VD Subtree');
        break;
      case 2:
        parent.addClass('step-3');
        title.html('2. Diff with the old one');
        break;
      case 3:
        parent.addClass('step-4');
        title.html('3. Minimal set of DOM mutations');
        break;
      case 4:
        parent.addClass('step-5');
        title.html('4. Apply changes');
        break;
      }
  }

  return true;
});

require('prism');
