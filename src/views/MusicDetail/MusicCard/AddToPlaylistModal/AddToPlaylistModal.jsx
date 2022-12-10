import { forwardRef } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSongs } from "src/hooks";
import { UseGetDetailSong } from "src/hooks/useGetDetailSong";
import { fetchPlaylist } from "src/store/playlists.slice";
import "./addToPlaylistModal.scoped.scss";

function AddToPlaylistModal({ open, togglesAddToPlaylistModal }, ref) {
  const params = useParams();
  const { data: music, isLoading: isLoadingDetailSong } = UseGetDetailSong(
    params.id
  );
  const { data: songs, isLoading: isLoadingSongs } = useGetSongs();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchPlaylist()(dispatch);
  }, []);

  const playlists = useSelector((store) => store.playlistReducer.playlists);

  const [isActive, setIsActive] = useState(1);
  const handleChangeTab = () => {
    if (isActive === 1) {
      setIsActive(2);
    } else {
      setIsActive(1);
    }
  };

  return (
    <div>
      {open && (
        <div className="modal">
          <div className="modal-content" ref={ref}>
            {isActive === 1 ? (
              <div>
                <div className="modal-header">
                  <div>
                    <button className="modal-content__create theme-bright">
                      ایجاد لیست پخش
                    </button>
                    <button
                      className="modal-content__select theme-dark"
                      onClick={handleChangeTab}
                      disabled={isActive === 2}
                    >
                      انتخاب لیست پخش
                    </button>
                  </div>
                  <button onClick={togglesAddToPlaylistModal}>
                    <img src="/images/close-circle.png" alt="#" />
                  </button>
                </div>
                <div className="modal-body">
                  <h3>نام لیست پخش</h3>
                  <div className="modal-content__input">
                    <input className="semi-rounded" type="text" />
                    <input type="submit" value="ذخیره" />
                  </div>
                  <div className="modal-content__list">
                    <img src={music.image_path} alt="#" />
                    <div>
                      <h4>{music.name}</h4>
                      <span>{music.singer}</span>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <h3>آهنگ های مشابه</h3>
                  <div className="modal-content__similar">
                    {songs?.map((song) => (
                      <div className="modal-content__wrapper" key={song.id}>
                        <div className="modal-content__info">
                          <img src={song.image_path} alt="#" />
                          <div className="modal-content__singer">
                            <h3 className="colored">{song.name}</h3>
                            <span>{song.singer}</span>
                          </div>
                        </div>
                        <button>اضافه کردن به لیست پخش</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="modal-header">
                  <div>
                    <button
                      className="modal-content__create theme-dark"
                      onClick={handleChangeTab}
                    >
                      ایجاد لیست پخش
                    </button>
                    <button className="modal-content__select theme-bright">
                      انتخاب لیست پخش
                    </button>
                  </div>
                  <button onClick={togglesAddToPlaylistModal}>
                    <img src="/images/close-circle.png" alt="#" />
                  </button>
                </div>
                <div className="modal-body">
                  <h3>فیلتر لیست پخش ها</h3>
                  <div className="modal-content__input">
                    <input className="full-rounded" type="text" />
                  </div>
                </div>
                <div className="modal-footer">
                  <h3>لیست های پخش</h3>
                  <div className="modal-content__similar">
                    {playlists?.map((playlist) => (
                      <div className="modal-content__wrapper" key={playlist.id}>
                        <div className="modal-content__info">
                          <img src={playlist.image} alt="#" />
                          <div className="modal-content__singer">
                            <h3>{playlist.name}</h3>
                            <span>{playlist.musicCounts} آهنگ</span>
                          </div>
                        </div>
                        <button>اضافه کردن به لیست پخش</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef(AddToPlaylistModal);
