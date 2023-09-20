import "./playlistPlayer.scoped.scss";
// import { useSelector } from "react-redux";
import usePlaylistControl from "src/hooks/usePlaylistControl";

function PlaylistPlayer() {
  // const isPlayingPlaylist = useSelector(
  //   (store) => store.playerReducer.isPlayingPlaylist
  // );

  const {
    change_vol,
    handlePlay,
    showPauseIcon,
    isPlayingPlaylist,
  } = usePlaylistControl();

  return (
    <div
      className="player_playlist"
      style={isPlayingPlaylist ? { display: "" } : { display: "none" }}
      id="player_playlist"
    >
      <audio id="playlist_player" />
      <div className="music-player__menu">
        <button>
          <img src="/images/more.svg" alt="#" />
        </button>
      </div>
      <div className="music-player__wrapper">
        <div className="music-player__btns">
          <button id="nextBtn" className="music-player__next">
            <img src="/images/next.png" alt="#" />
          </button>
          <button
            onClick={handlePlay}
            className="music-player__pause"
            id="play_button"
          >
            {showPauseIcon ? (
              <img
                src="/images/pause-pure.png"
                // width="24"
                // height="24"
                alt="#"
              />
            ) : (
              <img src="/images/play-pure.png" alt="#" />
            )}
          </button>
          <button id="previousBtn" className="music-player__previous">
            <img src="/images/previous.png" alt="#" />
          </button>
        </div>
        <div className="music-player__time">
          <span id="aNow_playlist" />
          <input
            id="aSeek_playlist"
            type="range"
            min="0"
            defaultValue={0}
            step="1"
          />
          <span id="aTime_playlist" />
        </div>
        <img
          className="music-player__sound"
          src="/images/volume.svg"
          id="vol_img"
          alt="#"
        />
        <input
          type="range"
          id="change_vol_playlist"
          onChange={change_vol}
          step="0.05"
          min="0"
          max="1"
          defaultValue={0.5}
        />
      </div>
      <div className="music-player__info">
        <img className="music-player__img" id="playlist_player__img" alt="#" />
        <div className="music-player__description">
          <h4 id="songname" />
          <span id="singerName" />
        </div>
      </div>
    </div>
  );
}

export default PlaylistPlayer;
