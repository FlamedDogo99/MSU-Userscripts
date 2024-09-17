// ==UserScript==
// @name            MSU Stale Redirect
// @description     Navigate back if presented with a stale request error
// @author          FlamedDogo99
// @namespace       http://github.com/FlamedDogo99
// @license         Apache License 2.0 - http://www.apache.org/licenses/
// @match           https://login.montana.edu/idp/profile/SAML2/Redirect/SLO
// @version         1.0.0
// @run-at          document-start
// @grant           none
// ==/UserScript==

// Redirects back to the previous page when faced with a "stale request" notice
history.back()