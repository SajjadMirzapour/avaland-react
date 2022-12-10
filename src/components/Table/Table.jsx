import { useState } from "react";
import TableBody from "./TableBody/TableBody";
import "./tableList.scoped.scss";

export default function Table({ data }) {
  const [showLike, setShowLike] = useState(-1);
  const toggleLike = (index) => {
    setShowLike(showLike === index ? -1 : index);
  };

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const togglePlaylistModal = (index) => {
    setShowPlaylistModal(showPlaylistModal === index ? -1 : index);
  };

  return (
    <>
      <table>
        <thead className="row">
          <tr>
            <th className="row__number">
              <span>#</span>
            </th>
            <th className="row__title">
              <span>عنوان</span>
            </th>
            <th className="row__album">
              <span>آلبوم</span>
            </th>
            <th className="row__date">
              <span>تاریخ انتشار</span>
            </th>
            <th className="row__menu">
              <span />
            </th>
          </tr>
        </thead>
        {data?.map((song, index) => (
          <TableBody data={song} index={index} key={song.id} />
        ))}
      </table>
      <section>
        {data?.map((song, index) => (
          <div className="card" key={song.id}>
            <img className="card__image" src={song.image_path} alt="#" />
            <div className="card__info">
              <div>
                <h3>{song.name}</h3>
                <h4>{song.singer}</h4>
                <div className="card__details">
                  <img
                    className="card__play-icon"
                    src="/images/play-mini-gray.svg"
                    alt="#"
                  />
                  <span className="card__play-count">{song.playCount}</span>
                  <span className="card__duration">{song.duration}</span>
                </div>
              </div>
              <button>
                <img src="/images/more.svg" alt="#" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
