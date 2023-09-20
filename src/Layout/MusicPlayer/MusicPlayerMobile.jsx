import "./musicPlayerMobile.scoped.scss";

function MusicPlayerMobile() {
  return (
    <div
      v-show="isPlayingMusic"
      id="player-mobile"
      className="music-player-mobile"
    >
      <div className="music-player-mobile__container">
        <div className="music-player-mobile__controll">
          <audio id="music_player_mobile" src="music?.src_path" />
          <div className="music-player-mobile__info">
            <img
              className="music-player-mobile__img"
              src="music.image_path"
              alt="#"
            />
            <div className="music-player-mobile__description">
              <h4>{{}}</h4>
            </div>
          </div>
          <div className="music-player-mobile__audio">
            <div className="music-player-mobile__time">
              <span id="aNow_mobile" />
              <input
                id="aSeek_mobile"
                type="range"
                min="0"
                value="0"
                step="1"
                className="music-player-mobile__lineTimeWrapper"
              />
              <span id="aTime_mobile" />
            </div>
            <div className="music-player-mobile__btns">
              <button
                click="play_aud_mobile"
                className="music-player-mobile__pause"
              >
                <img
                  v-if="showPauseIcon"
                  src="@/assets/images/play-pure.png"
                  alt="#"
                />
                <img
                  v-else="showPauseIcon"
                  src="@/assets/images/pause-pure.png"
                  alt="#"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerMobile;
