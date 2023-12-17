/* eslint-disable */

/**
 * Returns the button element that is used to skip ads on a webpage.
 * 
 * @returns {Element | undefined} The button element that is used to skip ads on a webpage.
 */
function getButtonSkipAds() {
    const moduleAds = $(SELECTORS.selectorModuleAds);
    return $(SELECTORS.selectorButtonSkipAds, moduleAds);
}

/**
 * The function `cbModuleAds` is an asynchronous function that checks if auto skip ads is enabled, and
 * if so, it clicks on the skip ads button.
 */
async function cbModuleAds() {
    let autoSkipEnabled = await browser.storage.sync.get(CONSTANTS.nameValueStoreAutoSkipAds)

    if (!autoSkipEnabled) {
        await browser.storage.sync.set({ [CONSTANTS.nameValueStoreAutoSkipAds]: true });
        autoSkipEnabled = { [CONSTANTS.nameValueStoreAutoSkipAds]: true }
        console.log("autoSkipAds not exists")
    }

    if (!autoSkipEnabled[CONSTANTS.nameValueStoreAutoSkipAds]) {
         return;
    }

    const buttonAds = getButtonSkipAds()

    if (!buttonAds) {
        console.log("Button SkipAds no exists check if change the selector: ", SELECTORS.selectorButtonSkipAds)
         return;
    }
    
    buttonAds.click();
    console.log("skiped ads!")
}


/**
 * The function `autoSkipAds()` automatically skips ads by observing changes in the module ads element
 * and executing a callback function.
 * @returns The function `autoSkipAds` returns a function that disconnects the `MutationObserver` when
 * called.
 */
function autoSkipAds() {
    const moduleads = $(SELECTORS.selectorModuleAds)

    if (!moduleads) {
        console.log("Div ModuleAds no exists check if change the selector: ", SELECTORS.selectorModuleAds)
        return;
    }

    const observerModuleAds = new MutationObserver(cbModuleAds)
    observerModuleAds.observe(moduleads, { childList: true, subtree: true })

    return (() => {
        observerModuleAds.disconnect()
    })
}
