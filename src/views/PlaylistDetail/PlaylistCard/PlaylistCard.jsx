import { useState } from "react";
import "./playlistCard.scoped.scss";

export default function PlaylistCard({ playlistDetail }) {
  const [showLike, setShowLike] = useState(true);
  const toggleLike = () => {
    setShowLike((prev) => !prev);
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="playlist-card">
      <div className="playlist-card__info">
        <div className="playlist-card__wrapper">
          <img
            className="playlist-card__img"
            src={playlistDetail.songs?.[0]?.image_path}
            alt="#"
          />
          <button className="playlist-card__playBtn">
            <img src="/images/playPlaylist-Btn.png" alt="#" />
          </button>
        </div>
        <div className="playlist-card__detail">
          <span className="playlist-card__list">لیست پخش</span>
          <h1>{playlistDetail.name}</h1>
          <div className="playlist-card__infoWrapper">
            <div className="playlist-card__songsWrapper">
              <img
                className="playlist-card__music-sign"
                src="/images/music-sign.svg"
                alt="#"
              />
              <span className="playlist-card__songs">
                {playlistDetail.songs?.length || 0} ترانه
              </span>
            </div>
            <div className="playlist-card__durationWrapper">
              <span>
                <img
                  className="playlist-card__clock"
                  src="/images/clock-golden.svg"
                  alt="#"
                />
              </span>
              <span className="playlist-card__duration">
                ۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه
              </span>
            </div>
          </div>
          <div className="playlist-card__btns">
            <button onClick={toggleLike} className="item heart">
              {showLike ? (
                <img src="/images/heart.svg" alt="#" />
              ) : (
                <img src="/images/heart-full-white.png" alt="#" />
              )}
            </button>
            <button className="item share">
              <img src="/images/share.png" alt="#" />
            </button>
            <button className="item" onClick={toggleModal}>
              <img src="/images/more.svg" alt="#" />
            </button>
            {showModal && (
              <div className="modal">
                <div>
                  <button>
                    <img src="/images/trash.png" alt="#" />
                    <span>حذف</span>
                  </button>
                </div>
                <div>
                  <button>
                    <img src="/images/edit.png" alt="#" />
                    <span>تغییر نام لیست</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
