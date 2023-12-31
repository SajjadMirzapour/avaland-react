import "./tableBody.scoped.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLikeSongs } from "src/store/likedSongs.slice";

export default function TableBody({ data, index }) {
  const dispatch = useDispatch();
  const toggleLike = (id) => {
    handleLikeSongs(id)(dispatch);
  };

  const likedSongs = useSelector((store) => store.likeReducer.likedSongsId);

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const togglePlaylistModal = (index) => {
    setShowPlaylistModal(showPlaylistModal === index ? -1 : index);
  };

  return (
    <tbody key={data.id}>
      <tr>
        <td>
          <span className="equlaizer-img"> #{index + 1} </span>
          {/* <img src="/images/equalizer.svg" alt="#" /> */}
        </td>
        <td>
          <NavLink to={`/musics/${data.id}`} className="music-card">
            <img className="music-card__avatar" src={data.image_path} alt="#" />
            <button className="music-card__info">
              <h3>{data.name}</h3>
              <span>{data.singer}</span>
            </button>
            {/* <img
              className="music-card__icon music-card__showIcon"
              src="/images/pause-golden-background.png"
              alt="#"
            /> */}
          </NavLink>
        </td>
        <td>
          <h3>{data.album}</h3>
        </td>
        <td>{new Date(data.release_date).toLocaleDateString("fa")}</td>
        <td className="musicInfo">
          <span dir="ltr"> {data.duration} </span>
          <button className="likeBtn" onClick={() => toggleLike(data.id)}>
            {likedSongs.includes(data.id) ? (
              <img src="/images/heart-golden.png" alt="#" />
            ) : (
              <img src="/images/heart.svg" alt="#" />
            )}
          </button>
          <button onClick={() => togglePlaylistModal(index)}>
            <img src="/images/more.svg" alt="#" />
          </button>
          {/* {showPlaylistModal === index ? (
                      <PlaylistModal v-if="ShowplaylistModal == index" />
                    ) : (
                      ""
                    )} */}
        </td>
      </tr>
    </tbody>
  );
}
