/* eslint-disable */

// Comprobar si el objeto "chrome" (para extensiones de Chrome) o "browser" (para extensiones de Firefox) está disponible.
if (chrome) {
    browser = chrome;
} 
if (!browser) {
    throw console.error("La API de extensión no está disponible.");
}

const CONSTANTS = {
    "nameValueStoreAutoSkipAds":"autoSkipAds",
    "nameValueStoreAutoLike":"autoLike",
    "nameValueStoreAutoLike_Time":"autoLike.Time",
    "classModuleAds": "#movie_player > div.video-ads.ytp-ad-module",
    "classButtonSkipAds": ".ytp-ad-skip-button-modern.ytp-button",
    "classVideoTitle": "#title > h1 > yt-formatted-string",
    "idSegmentedButtonLike": "#segmented-like-button",
    "classButtonLike": "#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button",
}


/**
 * The function "$" is a shorthand for the "querySelector" method in JavaScript.
 * @param {string} selector - The selector parameter is a string that represents a CSS selector. It is used to
 * select elements in the HTML document.
 * @param {HTMLElement} [finder] - The `finder` parameter is an optional parameter that specifies the element or
 * document to search within. If no `finder` parameter is provided, the default value is `document`,
 * which refers to the entire HTML document.
 * @returns {HTMLElement} the first element that matches the given selector within the specified finder.
 */
function $(selector, finder = document) {
    return finder.querySelector(selector);
}


/**
 * The function $$ is a shorthand for querying the DOM using a CSS selector.
 * @param {string} selector - The selector parameter is a string that represents a CSS selector. It is used to
 * select elements in the DOM (Document Object Model).
 * @param {HTMLElement} [finder] - The `finder` parameter is an optional parameter that specifies the element or
 * document to search within. If no `finder` parameter is provided, the default value is `document`,
 * which refers to the entire HTML document.
 * @returns {NodeListOf} a NodeList of elements that match the given selector.
 */
function $$(selector, finder = document) {
    return finder.querySelectorAll(selector);
}