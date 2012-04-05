# comment.aculo.us

Have you ever wanted to comment on [mir.aculo.us][] blog posts? Me neither. But now, you can!

## Installation

[mainscript]: https://raw.github.com/cowboy/comment.aculo.us/master/dist/commentaculous.js
[userscript]: https://raw.github.com/cowboy/comment.aculo.us/master/dist/commentaculous.user.js
[greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[mir.aculo.us]: http://mir.aculo.us/

If you're using Firefox, make sure you have the [Greasemonkey][greasemonkey] add-on installed first.

**To install, [click this userscript][userscript], then click Ok/Continue/Install in any browser confirmation dialogs that pop up.** Once installed, reload the [mir.aculo.us][] webpage. If you scroll down, you should see comments.

## What's a Userscript?

Userscripts are a convenient way to be able to add extra functionality to webpages. Chrome has native support for userscripts as Extensions, and Firefox supports userscripts via the [Greasemonkey][greasemonkey] add-on.

To manage userscripts:

* In Chrome: Tools > Extensions
* In Firefox: Greasemonkey > Manage User Scripts

## Updating

Once the [userscript][userscript] has been installed, changes to the [main script file][mainscript] will automatically load whenever it's updated. Just reload the [mir.aculo.us][] webpage to get the latest version.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## License
Copyright (c) 2012 "Cowboy" Ben Alman  
Licensed under the MIT license.  
<http://benalman.com/about/license/>
