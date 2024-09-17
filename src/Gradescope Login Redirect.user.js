// ==UserScript==
// @name            Gradescope Login Redirect
// @description     Redirect to direct MSU login page
// @author          FlamedDogo99
// @namespace       http://github.com/FlamedDogo99
// @downloadURL     https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/Gradescope%20Login%20Redirect.user.js
// @license         None
// @match           https://www.gradescope.com/*
// @version         1.0.0
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/Gradescope%20Login%20Redirect.user.js
// @grant           none
// ==/UserScript==
const redirectLink = "https://www.gradescope.com/auth/saml/montana"
function redirectLogin(e) {
    location.href = redirectLink
}
var loginButtons = document.getElementsByClassName('js-logInButton');
for (let i = 0; i < loginButtons.length; i++) {
	loginButtons[0].addEventListener("click",redirectLogin,true);
}
if(location.href == "https://www.gradescope.com/login") {
	location.href = redirectLink
}