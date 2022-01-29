import React, { Component } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { Skeleton } from "../Skeleton";
import { PlayerRoot, PlayerSkeleton } from "./Player.styles";

interface State {
    ready: boolean;
    playing: boolean;
}

export type PlayerProps = ReactPlayerProps;

/**
 * Player from <a href="https://github.com/CookPete/react-player" target="_blank" rel="noreferrer noopener">this repo</a>
 */
export class Player extends Component<PlayerProps, State> {
    state: State = {
        ready: false,
        playing: false,
    };

    render() {
        const { className, style, ...rest } = this.props;
        const { playing, ready } = this.state;

        return (
            <PlayerRoot className={className} style={style} onClick={() => this.setState({ playing: !playing })}>
                <ReactPlayer
                    controls
                    {...rest}
                    width="100%"
                    height="100%"
                    playing={playing}
                    fallback={<Skeleton />}
                    onReady={() => this.setState({ ready: true })}
                />
                {!ready && <PlayerSkeleton className="player-skeleton" />}
            </PlayerRoot>
        );
    }
}
