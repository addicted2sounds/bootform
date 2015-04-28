/*
 * bootform
 * https://github.com/addicted/bootform
 *
 * Copyright (c) 2015 addicted
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.bootform = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.bootform = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.bootform.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.bootform.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].bootform = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
