// ==UserScript==
// @name            MSU Stale Redirect
// @description     Navigate back if presented with a stale request error
// @author          FlamedDogo99
// @namespace       http://github.com/FlamedDogo99
// @downloadURL     https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/MSU%20Stale%20Redirect.user.js
// @license         None
// @match           https://login.montana.edu/idp/profile/SAML2/Redirect/SLO
// @version         1.0.0
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/MSU%20Stale%20Redirect.user.js
// @grant           none
// ==/UserScript==

// Redirects back to the previous page when faced with a "stale request" notice
history.back()