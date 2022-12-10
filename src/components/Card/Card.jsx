import "./card.scoped.scss";
import { NavLink } from "react-router-dom";

export default function Card({ data }) {
  return (
    <>
      <NavLink to={data.image ? `/playlists/${data.id}` : `/musics/${data.id}`}>
        {/* <NavLink to="/playlists/4"> */}
        <div className="card">
          <img
            height={165}
            className="card__img"
            src={data.image ? `${data.image}` : `${data.image_path}`}
            alt="#"
          />
          <div className="card__body">
            <div className="card__title">
              <h3>{data.name}</h3>
              {data.image ? (
                <span>ایجاد شده توسط {data.creator}</span>
              ) : (
                <span> {data.singer} </span>
              )}
            </div>
            {data.image ? (
              <button className="card__btn">
                <img src="/images/more.svg" alt="#" />
              </button>
            ) : (
              <div className="card__mini-like">
                <div>
                  <img src="/images/heart-full-white.png" alt="#" />
                </div>
                <span>{data.likes}</span>
              </div>
            )}
          </div>
        </div>
      </NavLink>
    </>
  );
}
