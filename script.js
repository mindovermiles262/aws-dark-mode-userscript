// ==UserScript==
// @name     AWS Dark Mode
// @version  0.1.0
// @grant    none
// ==/UserScript==

function expires(days=30) {
  daysValidMs = days * 24 * 60 * 60 * 1000;
  return new Date(new Date().getTime() + daysValidMs).toUTCString();
}

document.cookie = `awsc-color-theme=dark; expires=${expires()}; Domain=.amazon.com; Secure=false; Path=/`
