import "./slider.scoped.scss";
import { NavLink } from "react-router-dom";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider({ data }) {
  return (
    <>
      <section className="card-container">
        {data.map((music) => (
          <div className="card" key={music.id}>
            <img className="card__image" src={music.image_path} alt="#" />
            <div className="card__info">
              <div>
                <h3>{music.name}</h3>
                <h4>{music.singer}</h4>
                <div className="card__details">
                  <img
                    className="card__play-icon"
                    src="/images/play-mini-gray.svg"
                    alt="#"
                  />
                  <span className="card__play-count">{music.playCount}</span>
                  <span className="card__duration">{music.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2>محبوب‌ترین‌ها از همین خواننده</h2>
        <Swiper
          modules={[Navigation, A11y]}
          speed={900}
          spaceBetween={50}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 80,
            },
            1440: {
              slidesPerView: 5.5,
              spaceBetween: 150,
            },
            1800: {
              slidesPerView: 6.5,
              spaceBetween: 30,
            },
          }}
          slidesPerView={3}
          navigation={{
            disabledClass: "invisible",
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <button className="swiper-button-next">
            <img src="/images/previous-slider.png" alt="#" />
          </button>
          <button className="swiper-button-prev">
            <img src="/images/next-slider.png" alt="#" />
          </button>
          {data.map((music) => (
            <SwiperSlide className="swiper-slide" key={music.id}>
              <NavLink to={`/musics/${music.id}`}>
                <img
                  className="swiper-slide__img"
                  src={music.image_path}
                  alt="#"
                />
              </NavLink>
              <div>
                <span>{music.name}</span>
                <button>
                  <img src="/images/more.svg" alt="#" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
