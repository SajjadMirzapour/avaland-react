import "./musicCard.scoped.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UseGetDetailSong, useOnClickOutside } from "src/hooks";
import AddToPlaylistModal from "./AddToPlaylistModal/AddToPlaylistModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import EditMusic from "./EditMusic/EditMusic";
import useMusicControl from "src/hooks/useMusicControl";
import { playingMusicControl } from "src/store/player.slice";
import { useDispatch, useSelector } from "react-redux";
import { handleLikeSongs } from "src/store/likedSongs.slice";

function MusicCard() {
  const params = useParams();

  const dispatch = useDispatch();
  const toggleLike = (id) => {
    handleLikeSongs(id)(dispatch);
  };

  const likedSongs = useSelector((store) => store.likeReducer.likedSongsId);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const editMusicRef = useRef();
  const [showEditMusic, setShowEditMusic] = useState(false);
  const toggleEditMusic = () => {
    setShowEditMusic((prev) => !prev);
  };
  useOnClickOutside(editMusicRef, () => setShowEditMusic((prev) => !prev));

  const deleteModalRef = useRef();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteModal = (ev) => {
    setShowDeleteModal((prev) => !prev);
  };
  useOnClickOutside(deleteModalRef, () => setShowDeleteModal((prev) => !prev));

  const addToPlaylistModalRef = useRef();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const togglesAddToPlaylistModal = () => {
    setShowAddToPlaylistModal((prev) => !prev);
  };
  useOnClickOutside(addToPlaylistModalRef, () =>
    setShowAddToPlaylistModal((prev) => !prev)
  );

  const [showLyrics, setShowLyrics] = useState(false);
  const handleShow = () => {
    setShowLyrics((prev) => !prev);
  };
  // const dispatch = useDispatch();
  // const processListen = () => {
  //   playingMusicControl()(dispatch);
  //   playMusic();
  // };

  const player = document.getElementById("music_player");
  const { playMusic } = useMusicControl(player);

  const { data, refetch } = UseGetDetailSong(params.id, false);
  useEffect(() => {
    if (params.id) {
      refetch();
    }
  }, [params.id]);

  return (
    <>
      <div className="playlist-card">
        <div className="playlist-card__container">
          <div className="playlist-card__wrapper">
            <img
              className="playlist-card__img"
              src={data?.image_path}
              alt="#"
            />
            <button onClick={playMusic} className="playlist-card__playBtn">
              <img src="/images/playPlaylist-Btn.png" alt="#" />
            </button>
          </div>
          <div className="playlist-card__info">
            <div className="playlist-card__detail">
              <h1>{data?.name}</h1>
              <div className="playlist-card__infoWrapper">
                <div className="playlist-card__songsWrapper">
                  <img src="/images/person.png" alt="#" />
                  <span className="playlist-card__songs">{data?.singer}</span>
                </div>
                <div className="playlist-card__durationWrapper">
                  <img src="/images/golden-clock.png" alt="#" />
                  <span className="playlist-card__duration">
                    {data?.duration}
                  </span>
                </div>
              </div>
              <div className="playlist-card__btns">
                <button className="item" onClick={() => toggleLike(data?.id)}>
                  {likedSongs.includes(data?.id) ? (
                    <img src="/images/heart-full-white.png" alt="#" />
                  ) : (
                    <img v-else="liked" src="/images/heart.svg" alt="#" />
                  )}
                </button>
                <button className="item">
                  <img src="/images/share.png" alt="#" />
                </button>
                <button className="item" onClick={toggleModal}>
                  <img src="/images/more.svg" alt="#" />
                </button>
                {showModal ? (
                  <div className="more-modal" v-if="moreModal">
                    <div>
                      <button onClick={togglesAddToPlaylistModal}>
                        <img src="/images/add-playlist.png" alt="#" />
                        <span>اضافه کردن به لیست پخش</span>
                      </button>
                    </div>
                    <div>
                      <button onClick={toggleEditMusic}>
                        <img src="/images/edit.png" alt="#" />
                        <span>ویرایش آهنگ</span>
                      </button>
                    </div>
                    <div>
                      <button onClick={toggleDeleteModal}>
                        <img src="/images/trash.png" alt="#" />
                        <span> حذف آهنگ</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="playlist-card__lyrics">
              <div>
                <p
                  className={
                    showLyrics
                      ? "playlist-card__lyrics__showMore"
                      : "playlist-card__lyrics__showLess"
                  }
                >
                  {data?.lyrics}
                </p>
              </div>
              <button onClick={handleShow}>
                <span>مشاهده بیشتر</span>
                {showLyrics ? (
                  <img
                    src="/images/arrow-down.svg"
                    alt="#"
                    className="playlist-card__lyrics__arrow-up"
                  />
                ) : (
                  <img src="/images/arrow-down.svg" alt="#" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="playlist-card__lyrics-mobile">
          <div>
            <p>{data?.lyrics}</p>
          </div>
          <button>
            <span>مشاهده بیشتر</span>
            <img src="/images/arrow-down.svg" alt="#" />
          </button>
        </div>
      </div>
      <EditMusic
        open={showEditMusic}
        toggleEditMusic={toggleEditMusic}
        ref={editMusicRef}
      />
      <DeleteModal
        open={showDeleteModal}
        toggleDeleteModal={toggleDeleteModal}
        ref={deleteModalRef}
      />
      <AddToPlaylistModal
        open={showAddToPlaylistModal}
        togglesAddToPlaylistModal={togglesAddToPlaylistModal}
        ref={addToPlaylistModalRef}
      />
    </>
  );
}

export default MusicCard;
