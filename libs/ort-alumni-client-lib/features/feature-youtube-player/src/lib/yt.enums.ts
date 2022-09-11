export enum ModestBranding {
  /**
   * Player will contain full YouTube branding.
   */
  Full = 0,

  /**
   * YouTube logo will not display in the control bar.
   */
  Modest = 1,
}
export enum IvLoadPolicy {
  /**
   * Video annotations will be shown.
   */
  Show = 1,

  /**
   * Video annotations will not be shown.
   */
  Hide = 3,
}

export enum FullscreenButton {
  /**
   * The full screen button is hidden.
   */
  Hide = 0,

  /**
   * The full screen button is visible.
   */
  Show = 1,
}
export enum KeyboardControls {
  /**
   * Keyboard controls are enabled.
   */
  Enable = 0,

  /**
   * Keyboard controls are disabled.
   */
  Disable = 1,
}
export enum ShowInfo {
  /**
   * Hide video title and uploader before video starts playing.
   */
  Hide = 0,

  /**
   * Show video title and uploader before video starts playing.
   */
  Show = 1,
}
export enum Controls {
  /**
   * Player controls do not display.
   */
  Hide = 0,

  /**
   * Player controls display.
   */
  ShowLoadPlayer = 1,

  /**
   * Player controls display after a delay.
   */
  ShowDelayLoadPlayer = 2,
}
export enum RelatedVideos {
  /**
   * Hide related videos after playback is complete.
   */
  Hide = 0,

  /**
   * Show related videos after playback is complete.
   */
  Show = 1,
}
export enum Loop {
  /**
   * Video or playlist will be played only once.
   */
  SinglePlay = 0,

  /**
   * Video or playlist will be played over and over again.
   */
  Loop = 1,
}
export enum PlaysInline {
  /**
   * Playback in fullscreen.
   */
  Fullscreen = 0,

  /**
   * Playback inline
   */
  Inline = 1,
}
