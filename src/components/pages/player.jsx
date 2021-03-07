import React from "react";
import PropTypes from "prop-types";

import {getFilmDuration} from "../../utils/film";
import {activeFilmShape} from "../../validators/active-film";
import {PlayerStatus} from "../../consts";


const Player = ({activeFilm, status = PlayerStatus.PLAY}) => {
  const button = (status === PlayerStatus.PLAY) ? (
    <button type="button" className="player__play">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  ) : (
    <button type="button" className="player__play">
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"/>
      </svg>
      <span>Pause</span>
    </button>
  );
  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"/>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getFilmDuration(activeFilm.duration, `:`, 2, false)}</div>
        </div>
        <div className="player__controls-row">
          {button}
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  activeFilm: activeFilmShape.isRequired,
  status: PropTypes.oneOf(Object.values(PlayerStatus)),
};

export default Player;
