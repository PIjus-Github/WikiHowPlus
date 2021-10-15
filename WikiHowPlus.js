// ==UserScript==
// @name         WikiHowPlus
// @namespace    https://github.com/Peeeaaayus
// @version      1.0
// @description  Enchances your Wikihow experience.
// @author       PIjus
// @match        https://*.wikihow.com/*
// @grant        none
// ==/UserScript==
var elem = document.getElementById("article_courses_banner");
  elem.parentNode.removeChild(elem);
