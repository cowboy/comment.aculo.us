/*! comment.aculo.us - v0.1.0 - 2012-04-05
* https://github.com/cowboy/comment.aculo.us
* Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT */

// ==UserScript==
// @match http://mir.aculo.us/*/*/*/*
// @run-at document-end
// ==/UserScript==

var elem = document.createElement("script");
elem.src = "https://raw.github.com/cowboy/comment.aculo.us/master/dist/commentaculous.js";
document.body.appendChild(elem);
