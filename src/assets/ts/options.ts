interface IItem {
  title: string
  description: string
}

interface IOptions {
  [key: string]: IItem
}

const Options: IOptions = {
  "autoSkipAds": {
    "title": "Auto skip ads",
    "description": "Activate this option, and it will automatically skip all skippable ads."
  },
  "autoLike": {
    "title": "Auto Like",
    "description": "Enable this option to automatically like the video when entering."
  },
  "autoLike.Time": {
    "title": "Time to like the video",
    "description": "Set the time delay before automatically liking the video after entering."
  },
  "changeSelector": {
    "title": "DEBUG: Change Selectors",
    "description": ""
  },
  "changeSelector.selectorModuleAds": {
    "title": "selector ModuleAds",
    "description": ""
  },
  "changeSelector.selectorButtonSkipAds": {
    "title": "selector ButtonSkipAds",
    "description": ""
  },
  "changeSelector.selectorVideoTitle": {
    "title": "selector VideoTitle",
    "description": ""
  },
  "changeSelector.selectorButtonLike": {
    "title": "selector ButtonLike",
    "description": ""
  },
}

export default Options

