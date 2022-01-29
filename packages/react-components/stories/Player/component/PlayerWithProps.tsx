import { CSSProperties, ReactElement } from 'react';
import ReactPlayer, { Config } from 'react-player';
import { SourceProps } from 'react-player/base';
import { Player } from '../../../src';

export interface PlayerProps {
  url?: string | string[] | SourceProps[] | MediaStream;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  volume?: number;
  muted?: boolean;
  playbackRate?: number;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  progressInterval?: number;
  playsinline?: boolean;
  playIcon?: ReactElement;
  previewTabIndex?: number;
  pip?: boolean;
  stopOnUnmount?: boolean;
  light?: boolean | string;
  fallback?: ReactElement;
  wrapper?: any;
  onReady?: (player: ReactPlayer) => void;
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onBuffer?: () => void;
  onBufferEnd?: () => void;
  onEnded?: () => void;
  onClickPreview?: (event: any) => void;
  onEnablePIP?: () => void;
  onDisablePIP?: () => void;
  onError?: (
    error: any,
    data?: any,
    hlsInstance?: any,
    hlsGlobal?: any
  ) => void;
  onDuration?: (duration: number) => void;
  onSeek?: (seconds: number) => void;
  onProgress?: (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => void;
  [otherProps: string]: any;
  config?: Config;
}

export default function PlayerWithProps(props: PlayerProps): JSX.Element {
  return <Player {...props} />;
}
