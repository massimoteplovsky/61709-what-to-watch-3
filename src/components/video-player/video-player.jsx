import React from "react";
import {PropValidator} from "../../prop-validator/prop-validator.js";
import {PropTypes} from "prop-types";

const VideoPlayer = ({
  filmName,
  isPlaying,
  isLoading,
  isFullScreenMode,
  progress,
  timeRemain,
  onToggleRunMode,
  onChangeScreenMode,
  onClosePlayer,
  children
}) => {
  return (
    <div
      className="player"
      style={{cursor: `${isFullScreenMode ? `none` : `auto`}`}}
      onMouseMove={isFullScreenMode ? onChangeScreenMode : null}
      onClick={isFullScreenMode ? onChangeScreenMode : null}
    >
      {children}
      <button
        type="button"
        className={`player__exit ${isFullScreenMode ? `visually-hidden` : ``}`}
        onClick={onClosePlayer}
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
            disabled={isLoading}
            style={{opacity: isLoading ? 0.4 : 1}}
            onClick={onToggleRunMode}
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
          <div className="player__name">{filmName}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onChangeScreenMode}
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
  children: PropValidator.CHILD_NODE,
  filmName: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFullScreenMode: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  timeRemain: PropTypes.string.isRequired,
  onToggleRunMode: PropTypes.func.isRequired,
  onChangeScreenMode: PropTypes.func.isRequired,
  onClosePlayer: PropTypes.func.isRequired
};

export {VideoPlayer};
export default VideoPlayer;
