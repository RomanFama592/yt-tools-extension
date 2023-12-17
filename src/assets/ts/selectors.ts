interface ISelectors {
    [key: string]: string
}

const Selectors: ISelectors = Object.freeze({
    "selectorModuleAds": "#movie_player > div.video-ads.ytp-ad-module",
    "selectorButtonSkipAds": ".ytp-ad-skip-button-slot > span > .ytp-ad-skip-button-modern.ytp-button",
    "selectorVideoTitle": "#title > h1 > yt-formatted-string",
    "selectorButtonLike": "#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button"
})

export default Selectors