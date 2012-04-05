/*
 * comment.aculo.us
 * https://github.com/cowboy/comment.aculo.us
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */

var disqus_shortname;

// From http://benalman.com/projects/run-jquery-code-bookmarklet/
(function(window, document, reqVersion, callback, $, script, done, readystate) {

  // If jQuery isn't loaded, or is a lower version than specified, load the
  // specified version and call the callback, otherwise just call the callback.
  if (!($ = window.jQuery) || reqVersion > $.fn.jquery || callback($)) {

    // Create a script element.
    script = document.createElement('script');
    script.type = 'text/javascript';

    // Load the specified jQuery from the Google AJAX API server (minified).
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + reqVersion + '/jquery.min.js';

    // When the script is loaded, remove it, execute jQuery.noConflict( true )
    // on the newly-loaded jQuery (thus reverting any previous version to its
    // original state), and call the callback with the newly-loaded jQuery.
    script.onload = script.onreadystatechange = function() {
      if (!done && (!(readystate = this.readyState) ||
        readystate === 'loaded' || readystate === 'complete')) {

        callback(($ = window.jQuery).noConflict(1), done = 1);

        $(script).remove();
      }
    };

    // Add the script element to either the head or body, it doesn't matter.
    document.documentElement.childNodes[0].appendChild(script);
  }

}(window, document,

  // Minimum jQuery version required. Change this as-needed.
  '1.7',

  // Your jQuery code goes inside this callback. $ refers to the jQuery object,
  // and L is a boolean that indicates whether or not an external jQuery file
  // was just "L"oaded.
  function($, L) {

    // Do stuff once jQuery is loaded.
    disqus_shortname = 'commentaculous';
    $('h1').last().closest('div').append('<div id="disqus_thread"/>');
    $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js');

  }
));
