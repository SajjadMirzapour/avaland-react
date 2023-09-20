import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchValue } from "src/store/search.slice";
import "./header.scoped.scss";

export default function Header() {
  const dispatch = useDispatch();

  const handleSearch = (ev) => {
    getSearchValue(ev.target.value)(dispatch);
  };

  const [show, setShow] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
    setArrowUp((prev) => !prev);
  };

  return (
    <div>
      <header className="header">
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="جستجو..."
            onChange={handleSearch}
          />
          <button
          // onClick={goToSearch()}
          >
            <img className="search__img" src="/images/search.svg" alt="#" />
          </button>
          <ul>
            <li>آواز</li>
            <li>ایرانی</li>
            <li>سنتی</li>
            <li>
              <img src="/images/filter.svg" alt="#" />
            </li>
            <li>فیلتر</li>
          </ul>
          <div className="search__filter">
            <span>
              <img src="/images/filter.svg" alt="#" />
            </span>
            <span>فیلتر</span>
          </div>
        </div>
        <button onClick={handleShow} className="header__profile">
          <span>سجاد میرزا</span>
          {arrowUp ? (
            <img
              src="/images/arrow-down.svg"
              alt="#"
              className="header__profile__arrowUp"
            />
          ) : (
            <img src="/images/arrow-down.svg" alt="#" />
          )}
          {/* <img src="/images/arrow-down.svg" alt="#" /> */}
        </button>
        <div
          className={
            show
              ? "header__person-info show-more"
              : "header__person-info show-less"
          }
        >
          <a className="header__person-info__list-item" href="#">
            تغییر نام کاربری
          </a>
          <a className="header__person-info__list-item" href="#">
            تغییر رمز عبور
          </a>
          <a className="header__person-info__list-item" href="#">
            تغییر عکس پروفایل
          </a>
          <a className="header__person-info__list-item" href="#">
            خروج از حساب کاربری
          </a>
        </div>
      </header>
    </div>
  );
}
