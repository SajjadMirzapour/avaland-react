import "./home.scoped.scss";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "src/store/playlist.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useGetSongs, useGetFavoriteMusic } from "src/hooks";

export default function Home() {
  const dispatch = useDispatch();
  const playlist = useSelector((store) => store.playlistReducer.playlist);
  const { data: music, isLoading: isLoadingSongs } = useGetSongs();
  const { data: favoriteMusic } = useGetFavoriteMusic();

  useEffect(() => {
    fetchUsers()(dispatch);
    // const interval = setInterval(() => {
    //   refetch();
    // }, 5000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const renderedMusics = useMemo(
    () =>
      music.slice(0, 4).map((song, index) => (
        <NavLink key={index} className="card" to={`/musics/${song.id}`}>
          <img className="card__img" src={song.image_path} alt="#" />
          <div className="card__body">
            <div className="card__title">
              <h3>{song.name}</h3>
              <span>{song.singer}</span>
            </div>
          </div>
        </NavLink>
      )),
    [music]
  );
  return (
    <div className="landing">
      <main>
        <div className="img-news" />
        <div className="new-week">
          <div className="new-week__title">
            <h2>جدیدترین آهنگ های این هفته</h2>
            <NavLink to="/musics">مشاهده همه</NavLink>
          </div>
          <div className="card-container">{renderedMusics}</div>
        </div>
        <div className="playlist">
          <div className="playlist__title">
            <h2>لیست پخش منتخب</h2>
            <NavLink to="/playlists">مشاهده همه</NavLink>
          </div>
          <div className="card-container">
            {playlist.slice(0, 4).map((playlist, index) => (
              <NavLink
                key={index}
                className="card"
                to={`/musics/${playlist.id}`}
              >
                <img className="card__img" src={playlist.image} alt="#" />
                <div className="card__body">
                  <div className="card__title">
                    <h3>{playlist.name}</h3>
                    <span>{playlist.creator}</span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </main>
      <section className="navigation">
        <div className="special-acount">
          <div className="specila-acount__logo">
            <img src="/images/special-logo.png" alt="#" />
            <h3>خرید اکانت ویژه ۶ ماهه</h3>
          </div>
          <h1>۶۵۰۰۰ تومان</h1>
          <p>
            لورم ایپسوم متن آماده برای جایگذاری در سیستم تولید محتوا می باشد.
          </p>
        </div>
        <div className="music-controller">
          <div className="music-controller__btns">
            <button className="music-controller__history">تاریخچه پخش</button>
            <button className="music-controller__favorites">
              محبوب ترین آهنگ ها
            </button>
          </div>
          <div className="music-controller__list">
            <div className="mini-card-container">
              {favoriteMusic.map((song) => (
                <div key={song.id} className="mini-card">
                  <img
                    className="mini-card__poster"
                    src={song.image_path}
                    alt="#"
                  />
                  <div>
                    <h4>{song.name}</h4>
                    <div className="mini-card__like">
                      <div>
                        <img src="/images/heart-full-white-mini.png" alt="#" />
                      </div>
                      <span>{song.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
