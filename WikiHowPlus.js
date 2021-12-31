// ==UserScript==
// @name         WikiHowPlus
// @namespace    https://github.com/Peeyos1
// @version      1.0
// @description  Enchances your Wikihow experience.
// @author       PIjus
// @match        https://*.wikihow.com/*
// @grant        none
// ==/UserScript==
var elem = document.getElementById("article_courses_banner");
  elem.parentNode.removeChild(elem);
elem = document.getElementById("gdpr");
  elem.parentNode.removeChild(elem);
elem = document.getElementById("gdpr_text");
  elem.parentNode.removeChild(elem);
elem = document.getElementById("gdpr_accept_wrap");
  elem.parentNode.removeChild(elem);
elem = document.getElementById("gdpr_close");
  elem.parentNode.removeChild(elem);
