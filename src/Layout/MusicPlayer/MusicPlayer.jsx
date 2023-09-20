import "./MusicPlayer.scoped.scss";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UseGetDetailSong } from "src/hooks";
import useMusicControl from "src/hooks/useMusicControl";
import { handleLikeSongs } from "src/store/likedSongs.slice";
import { useDispatch, useSelector } from "react-redux";

function MusicPlayer() {
  const params = useParams();
  const { data: song } = UseGetDetailSong(params.id);

  const dispatch = useDispatch();
  const toggleLike = (id) => {
    handleLikeSongs(id)(dispatch);
  };

  const likedSongs = useSelector((store) => store.likeReducer.likedSongsId);

  const audioRef = useRef({});
  const volumeRef = useRef([]);
  const currentTimeRef = useRef([]);
  const timeRef = useRef([]);
  const toatalTimeRef = useRef([]);

  const {
    playMusic,
    changeVolume,
    isPlayingMusic,
    showPauseIcon,
  } = useMusicControl();
  // audioRef.current,
  // volumeRef.current
  // currentTimeRef.current,
  // timeRef.current,
  // toatalTimeRef.current

  return (
    // isPlayingMusic && (
    <div
      id="player"
      style={isPlayingMusic ? { display: "" } : { display: "none" }}
    >
      {/* <AudioPlayer playList={mySong} /> */}
      <audio id="music_player" ref={audioRef} src={song?.src_path} />
      <div className="music-player__menu">
        <button>
          <img src="/images/more.svg" alt="#" />
        </button>
        <button onClick={() => toggleLike(song?.id)} className="item">
          {likedSongs.includes(song?.id) ? (
            <img src="/images/heart-full-white.png" alt="#" />
          ) : (
            <img src="/images/heart.svg" alt="#" />
          )}
        </button>
      </div>
      <div className="music-player__wrapper">
        <div className="music-player__btns">
          <button
            onClick={playMusic}
            className="music-player__pause"
            id="play_button"
          >
            {showPauseIcon ? (
              <img
                src="/images/play-pure.png"
                // width="24" height="24"s
                alt="#"
              />
            ) : (
              <img
                src="/images/pause-pure.png"
                width="24"
                height="24"
                alt="#"
              />
            )}
          </button>
        </div>
        <div className="music-player__time">
          <span id="aNow" ref={currentTimeRef} />
          <input
            id="aSeek"
            ref={timeRef}
            type="range"
            min="0"
            defaultValue="0"
            step="1"
          />
          <span id="aTime" ref={toatalTimeRef} />
        </div>
        <img
          className="music-player__sound"
          src="/images/volume.svg"
          id="vol_img"
          alt="#"
        />
        <input
          type="range"
          id="change_vol"
          ref={volumeRef}
          onChange={changeVolume}
          step="0.05"
          min="0"
          max="1"
          defaultValue={0.5}
        />
      </div>
      <div className="music-player__info">
        <img className="music-player__img" src={song?.image_path} alt="#" />
        <div className="music-player__description">
          <h4>{song?.name}</h4>
          <span>{song?.singer}</span>
        </div>
      </div>
    </div>
  );
  // );
}

export default MusicPlayer;
