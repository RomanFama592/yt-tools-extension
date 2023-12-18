/* eslint-disable */

let lasthref = ""
let functionsDismount = [() => { },]
const functions = [autoUpdateSelectors, autoSkipAds, autoLike];

setInterval(async () => {
    if (lasthref === window.location.href) {
        return;
    }

    /* The line `functionsDismount.map(cb => { cb() })` is calling each function in the
    `functionsDismount` array. It is iterating over each function in the array and invoking it by
    calling `cb()`. This line is used to dismount any previously executed functions before executing
    new functions. */
    functionsDismount.map(cb => { cb() })

    /* The code is creating a new array called `tempFunctions` by performing the following operations: */
    let tempFunctions = await functions
        .map(async cb => await cb())
        .filter(value => typeof value === "function")

    /* The line `functionsDismount = tempFunctions` is assigning the value of the `tempFunctions` array
    to the `functionsDismount` array. This means that the `functionsDismount` array will now contain
    the same functions as the `tempFunctions` array. */
    functionsDismount = tempFunctions

    lasthref = window.location.href
}, 1000)
