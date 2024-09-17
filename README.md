# MSU Userscripts
[![License](https://img.shields.io/github/license/FlamedDogo99/MSU-Userscripts?style=flat-square)](https://github.com/FlamedDogo99/MSU-Userscripts/blob/main/LICENSE)
## About
Navigating Montana State University websites can be extremely annoying. This repository contains some quality-of-life userscripts to make that experience easier.

### Gradescope Login Redirect
Logging into Gradescope requires navigating mutliple login screens and search bars to eventually end up in the same login screen that most Montana State websites use. This userscript skips all of that, taking you directly to the correct login portal on the first click.

### MyInfo Style
This is a userscript version of the MyInfo+ chrome extension. It adds a functional search bar to help navigate MyInfo's confusing layout, scales the window to be easily accessible on mobile devices, and tastefully restyles the 2011 (and older) graphics.

### Redirect MyInfo
When you log out of MyInfo, voluntarily or not, it leaves you on a page that says "logout succesful", with no option to navigate back to the previous website. This userscript redirects this screen back to the MyInfo login page.

### Silence MyInfo
When MyInfo decides to arbitrarily logout, it displays an alert saying `Session timeout occurred` that stops any page navigation until it's dismissed. This userscript removes that.

### MSU Stale Redirect
When navigating Montana State University websites, it's common to be faced with  `stale request` error pages, with no explanation for why you arrived there. This single-line userscript handles that by navigating backwords in the session history.

## License

"MSU Userscripts" is licensed under the terms of the [Apache License, Version 2.0](https://github.com/FlamedDogo99/MSU-Userscripts/blob/main/LICENSE).