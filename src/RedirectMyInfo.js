// ==UserScript==
// @name         MyInfo Redirect
// @namespace    http://scratch.mit.edu
// @version      0.1
// @description  Redirects MyInfo Logout
// @author       FlamedDogo
// @match        https://login.montana.edu/idp/profile/cas/logout*
// @downloadURL  https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/RedirectMyInfo.js
// @license      None
// @grant        none
// @updateURL    https://raw.githubusercontent.com/FlamedDogo99/MSU-Userscripts/main/src/RedirectMyInfo.js
// @run-at       document-start
// ==/UserScript==

function injectRefresh() {
    document.head.insertAdjacentHTML("beforeend", `<meta http-equiv = "refresh" content = "1; url = https://prodmyinfo.montana.edu/ssomanager/c/SSB?pkg=https://prodmyinfo.montana.edu/pls/bzagent/pk_wg_myinfo_alert.p_alert_launch" />`);
    document.body.insertAdjacentHTML("beforeend", `
        <center>
            <h1>Redirecting to <a href="https://prodmyinfo.montana.edu/ssomanager/c/SSB?pkg=https://prodmyinfo.montana.edu/pls/bzagent/pk_wg_myinfo_alert.p_alert_launch">MyInfo</a></h1>
        </center>
`);
}

injectRefresh();