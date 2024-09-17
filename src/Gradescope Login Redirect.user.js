// ==UserScript==
// @name            Gradescope Login Redirect
// @description     Redirect to direct MSU login page
// @author          FlamedDogo99
// @namespace       http://github.com/FlamedDogo99
// @license         Apache License 2.0 - http://www.apache.org/licenses/
// @match           https://www.gradescope.com/*
// @version         1.0.0
// @run-at          document-start
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