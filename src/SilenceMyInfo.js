// ==UserScript==
// @name         Silence MyInfo Logout
// @namespace    http://scratch.mit.edu
// @version      0.1
// @description  Silences MyInfo logout notification
// @author       FlamedDogo
// @match        https://prodmyinfo.montana.edu/*
// @downloadURL  https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/SilenceMyInfo.js
// @license      None
// @grant        none
// @updateURL    https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/SilenceMyInfo.js
// @run-at       document-start
// ==/UserScript==

// The default logout alert interupts the redirect
// This is dumb because it relies on them never changing the alert message
// To be fair they haven't updated their codebase since 2011
const newAlert = window.alert;
window.alert = function(msg) {
    if (msg != 'Session timeout occurred') {
        newAlert(msg);
    }
}
