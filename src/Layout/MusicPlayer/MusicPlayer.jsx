import "./MusicPlayer.scoped.scss";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UseGetDetailSong } from "src/hooks";
import useMusicControl from "src/hooks/useMusicControl";
// import AudioPlayer from "react-modern-audio-player";

function MusicPlayer() {
  const params = useParams();
  const { data: song } = UseGetDetailSong(params.id);

  const [showLike, setShowLike] = useState(false);
  const toggleLike = () => {
    setShowLike((prev) => !prev);
  };

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
  } = useMusicControl(
    audioRef.current,
    volumeRef.current
    // currentTimeRef.current,
    // timeRef.current,
    // toatalTimeRef.current
  );

  // const mySong = {
  //   name: song?.name,
  //   writer: song?.singer,
  //   img: song?.image_path,
  //   src: song?.src_path,
  //   id: song?.id,
  // };

  return (
    // isPlayingMusic && (
    <div id="player">
      {/* <AudioPlayer playList={mySong} /> */}
      <audio id="music_player" ref={audioRef} src={song?.src_path} />
      {/* <source src="/songs/Donya-Zendegim-128.mp3" /> */}
      <div className="music-player__menu">
        <button>
          <img src="/images/more.svg" alt="#" />
        </button>
        <button onClick={toggleLike} className="item">
          {showLike ? (
            <img src="/images/heart-full-white.png" alt="#" />
          ) : (
            <img src="/images/heart.svg" alt="#" />
          )}
        </button>
      </div>
      <div className="music-player__wrapper">
        <div className="music-player__btns">
          <button className="music-player__next">
            <img src="/images/next.png" alt="#" />
          </button>
          <button
            onClick={playMusic}
            className="music-player__pause"
            id="play_button"
          >
            {showPauseIcon ? (
              <img src="/images/play-pure.png" width="24" height="24" alt="#" />
            ) : (
              <img
                src="/images/pause-pure.png"
                width="24"
                height="24"
                alt="#"
              />
            )}
          </button>
          <button className="music-player__previous">
            <img src="/images/previous.png" alt="#" />
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
    // )
  );
}

export default MusicPlayer;
