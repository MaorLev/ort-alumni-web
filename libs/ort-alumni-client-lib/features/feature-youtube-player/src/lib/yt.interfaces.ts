import { Controls, FullscreenButton, IvLoadPolicy, KeyboardControls, Loop, ModestBranding, PlaysInline, RelatedVideos, ShowInfo } from "./yt.enums";

export interface YTVars extends  YT.PlayerVars {
    //if you want loop, then you most fill playlist property with the same idplayer
  loop?: Loop;
  rel?: RelatedVideos;
  controls?: Controls;
  mute?: boolean;
  showinfo?: ShowInfo;
  disablekb?: KeyboardControls;
  fs?: FullscreenButton;
  // * Player language as an ISO 639-1 two-letter language code or fully-specified locale.
  hl?: string;
  iv_load_policy?: IvLoadPolicy;
  modestbranding?: ModestBranding;
  // * Comma separated list of video IDs to play after the URL path's video.
  playlist?: string;
  //  * Whether videos play inline or fullscreen in an HTML5 player on iOS. (currently by default, Fullscreen).
  playsinline?: PlaysInline;
  //the host for prevent cors, default ''https://www.youtube-nocookie.com''
  host?: string;
}


export interface YTInterface {
  idPlayer: string;
  playerVars?: YTVars;
  autoplay?: boolean;
  height?:number;
  width?:number;
}