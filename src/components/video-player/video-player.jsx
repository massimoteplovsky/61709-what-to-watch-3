import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const VideoPlayer = ({
  isPlaying,
  isFullScreenMode,
  progress,
  timeRemain,
  onRunModeToggle,
  onFullScreenMode,
  children
}) => {
  return (
    <div
      className="player"
      style={{cursor: `${isFullScreenMode ? `none` : `auto`}`}}
      onMouseMove={isFullScreenMode ? onFullScreenMode : null}
      onClick={isFullScreenMode ? onFullScreenMode : null}
    >
      {children}
      <button
        type="button"
        className={`player__exit ${isFullScreenMode ? `visually-hidden` : ``}`}
        onClick={() => {
          onRunModeToggle();
          history.back();
        }}
      >
        Exit
      </button>

      <div
        className={`player__controls ${isFullScreenMode ? `visually-hidden` : ``}`}
      >
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeRemain}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onRunModeToggle}
          >
            {
              isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
                :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            }
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenMode}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  children: PropValidator.CHILDREN,
  isPlaying: PropValidator.IS_PLAYING,
  isFullScreenMode: PropValidator.IS_FULL_SCREEN_MODE,
  progress: PropValidator.PROGRESS,
  timeRemain: PropValidator.TIME_REMAIN,
  onRunModeToggle: PropValidator.TOGGLE_PLAYING,
  onFullScreenMode: PropValidator.TOGGLE_FULL_SCREEN
};

export default VideoPlayer;
