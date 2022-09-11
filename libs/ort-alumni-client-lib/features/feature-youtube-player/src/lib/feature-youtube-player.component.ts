import { SizePlayer } from './load-yt-api.directive';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { YTInterface, YTVars } from './yt.interfaces';

@Component({
  selector: 'ort-feature-youtube-player',
  templateUrl: './feature-youtube-player.component.html',
  styles: [
    `
      :host {
        display: block;
        .hero-video {
          width: 100vw;
        }
        .hero-video:before {
          content: '';
          background: transparent no-repeat center 80% / cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureYoutubePlayerComponent implements OnInit {
  idPlayer: string;
  height: number | undefined;
  @Input() playerConfig: YTInterface;
  playerVars: YTVars;
  autoplay: boolean;
  customSize: boolean;
  get videoHeight(): number | undefined {
    return this.height;
  }
  set videoHeight(vari: number | undefined) {
    this.height = vari;
  }
  width: number | undefined;
  get videoWidth(): number | undefined {
    return this.width;
  }
  set videoWidth(vari: number | undefined) {
    this.width = vari;
  }

  set currSizePlayer(vari: SizePlayer) {
    const { height, width } = vari;
    this.videoWidth = width;
    this.videoHeight = height;
    this.changeDetectorRef.detectChanges();
  }
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.idPlayer = 'JaCoOMPNgJE';
    //Access for change, dont worry
    this.playerVars = {
      loop: 0,
      rel: 0,
      controls: 1,
      mute: false,
      // autoplay: 1,
      // enablejsapi:1,
      showinfo: 0,
      disablekb: 0,
      fs: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 0,
      playlist: '',
      host: 'https://www.youtube-nocookie.com',
    };
    this.autoplay = true;
    this.customSize = false;
  }
  ngOnInit(): void {
    this.playerVars = this.playerConfig.playerVars || this.playerVars;

    this.idPlayer = this.playerConfig.idPlayer || this.idPlayer;
    this.autoplay = this.playerConfig.autoplay || this.autoplay;
    if (this.playerConfig.playerVars?.loop === 1)
      this.playerVars.playlist = this.idPlayer;
    if (!!this.playerConfig?.height || !!this.playerConfig?.width) {
      this.customSize = true;
      this.currSizePlayer = {
        height: this.playerConfig?.height || undefined,
        width: this.playerConfig?.width || undefined,
      };
    }
  }

  isReady(eve: any) {
    eve.target.playVideo();
  }
}
