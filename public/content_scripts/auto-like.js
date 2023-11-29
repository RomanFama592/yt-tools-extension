/* eslint-disable */

/**
 * The function returns the button element of like.
 * @returns {HTMLButtonElement | undefined} the button.
 */
function getButtonLike() {
    return $(CONSTANTS.classButtonLike)
}

let prevVideo = ""

/**
 * The function `autoLike` is an asynchronous function that automatically likes a video on a website
 * based on certain conditions.
 * @returns The function `autoLike` returns a function that sets the `prevVideo` variable to the value
 * of `currentVideo` and clears the timeout set by `setTimeout`.
 */
async function autoLike() {
    let autoLike = await browser.storage.local.get(CONSTANTS.nameValueStoreAutoLike)
    const time = await browser.storage.local.get(CONSTANTS.nameValueStoreAutoLike_Time)

    if (!autoLike) {
        await browser.storage.local.set({ [CONSTANTS.nameValueStoreAutoLike]: true });
        autoLike = {[CONSTANTS.nameValueStoreAutoLike]: 1}
        console.log("autoLike not exists")
    }

    if (!autoLike[CONSTANTS.nameValueStoreAutoLike]) {
        return;
    }

    if (!time?.[CONSTANTS.nameValueStoreAutoLike_Time]) {
        console.log("no exists time in autoLike")
        browser.storage.local.set({ [CONSTANTS.nameValueStoreAutoLike_Time]: 1 });
        time[CONSTANTS.nameValueStoreAutoLike_Time] = 1
    }

    if(!$(CONSTANTS.classVideoTitle)){
        console.log("Title the video no exists check if change the selector: ", CONSTANTS.classVideoTitle)
        return;
    }

    let currentVideo

    const timeout = setTimeout(() => {
        const buttonLike = getButtonLike()
        currentVideo = $(CONSTANTS.classVideoTitle).innerText


        if (prevVideo === currentVideo) {
            return;
        }

        if (buttonLike?.ariaPressed === "true") {
            console.log("Button Like no exists check if change the selector: ", CONSTANTS.classButtonLike)
            return;
        }

        buttonLike.click();

    }, Number(time[CONSTANTS.nameValueStoreAutoLike_Time]) * 1000)

    return (() => {
        prevVideo = currentVideo
        clearTimeout(timeout)
    })
}