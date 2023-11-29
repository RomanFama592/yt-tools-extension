interface IOptions {
  [key: string]: IItem
}

interface IItem {
  title: string
  description: string
}

const Options: IOptions = {
  "autoSkipAds": {
    "title": "Auto skip ads",
    "description": "Activate this option, and it will automatically skip all skippable ads."
  },
  "autoLike": {
    "title": "Auto Like",
    "description": "Enable this option to automatically like the video when it starts playing."
  },
  "autoLike.Time": {
    "title": "Time to like the video",
    "description": "Set the time delay before automatically liking the video after it starts playing."
  },
}

export default Options

