// ==UserScript==
// @name         Silence MyInfo Logout
// @namespace    http://scratch.mit.edu
// @version      0.1
// @description  Silences MyInfo logout notification
// @author       FlamedDogo
// @match        https://prodmyinfo.montana.edu/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

//The default logout alert interupts the redirect
//This is dumb because it relies on them never changing the alert message
const newAlert = window.alert;
window.alert = function(msg) {
    if (msg != 'Session timeout occurred') {
        newAlert(msg);
    }
}
