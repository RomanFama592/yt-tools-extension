/* eslint-disable */

const namesSelectors = Object.keys(SELECTORS)
const idsSelectors = namesSelectors.map(selector => CONSTANTS.initPartIdForSelectors + selector)

async function autoUpdateSelectors() {
    const newSelectors = await browser.storage.sync.get(idsSelectors)
    namesSelectors.forEach((nameProp, index) => {
        SELECTORS[nameProp] = newSelectors[idsSelectors[index]]
            ? newSelectors[idsSelectors[index]]
            : SELECTORS[nameProp]
    })
}