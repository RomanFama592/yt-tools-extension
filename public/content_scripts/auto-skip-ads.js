/* eslint-disable */

/**
 * Returns the button element that is used to skip ads on a webpage.
 * 
 * @returns {Element | undefined} The button element that is used to skip ads on a webpage.
 */
function getButtonSkipAds() {
    return $(SELECTORS.selectorButtonSkipAds);
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
    }

    const buttonAds = getButtonSkipAds()

    if (!buttonAds) {
        console.error("If you are in a video and the advertising does not automatically skip, it is because this selector is not found: ´selectorButtonSkipAds´, verify that it is still valid. Current selector: ", SELECTORS.selectorButtonSkipAds)
        return;
    }

    const click_event = new CustomEvent('click');
    buttonAds.dispatchEvent(click_event);

    //buttonAds.click();
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
        console.error("If you are in a video and the advertising does not automatically skip, it is because this selector is not found: ´selectorModuleAds´, verify that it is still valid. Current selector: ", SELECTORS.selectorModuleAds)
        return;
    }

    const observerModuleAds = new MutationObserver(cbModuleAds)
    observerModuleAds.observe(moduleads, { childList: true, subtree: true })

    return (() => {
        observerModuleAds.disconnect()
    })
}
