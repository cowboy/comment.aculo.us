/*
 * comment.aculo.us
 * https://github.com/cowboy/comment.aculo.us
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */

// ==UserScript==
// @match http://mir.aculo.us/*/*/*/*
// @run-at document-end
// ==/UserScript==

var elem = document.createElement("script");
elem.src = "https://raw.github.com/cowboy/comment.aculo.us/master/dist/commentaculous.js";
document.body.appendChild(elem);
