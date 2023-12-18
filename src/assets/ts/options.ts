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
    "description": "Modify the HTML elements selectors at your discretion, taking full responsibility for the changes. Refer to the specified tutorial for guidance during the modification process."
  },
  "changeSelector.selectorModuleAds": {
    "title": "selector ModuleAds",
    "description": "Specify the selector for the module containing ads."
  },
  "changeSelector.selectorButtonSkipAds": {
    "title": "selector ButtonSkipAds",
    "description": "Specify the selector for the button to skip ads."
  },
  "changeSelector.selectorVideoTitle": {
    "title": "selector VideoTitle",
    "description": "Specify the selector for the video title."
  },
  "changeSelector.selectorButtonLike": {
    "title": "selector ButtonLike",
    "description": "Specify the selector for the button to like the video."
  },
};


export default Options

