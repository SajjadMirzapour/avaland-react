import "./sidebar.scoped.scss";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as HeartIcon } from "src/components/Icons/HeartIcon.svg";
import { ReactComponent as HomeIcon } from "src/components/Icons/HomeIcon.svg";
import { ReactComponent as PlayIcon } from "src/components/Icons/PlayIcon.svg";
import { ReactComponent as SearchIcon } from "src/components/Icons/SearchIcon.svg";
import { ReactComponent as SelectedlistIcon } from "src/components/Icons/SelectedlistIcon.svg";
import { ReactComponent as UploadmusicIcon } from "src/components/Icons/UploadmusicIcon.svg";

export default function Sidebar() {
  // const route = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img className="sidebar__logo-img" src="/images/logo.png" alt="#" />
      </div>
      <div className="sidebar__menu">
        <NavLink
          to="/"
          // className={`sidebar__menu-item ${
          //   route.pathname === "/" ? "active" : ""
          // }`}
          className="sidebar__menu-item"
        >
          <HomeIcon />
          <span>صفحه اصلی</span>
        </NavLink>
        <NavLink to="/search" className="sidebar__menu-item">
          <SearchIcon />
          <span>جستجو</span>
        </NavLink>
        <NavLink
          to="/musics"
          className="sidebar__menu-item"
          // :className="{ active: $route.path.indexOf('/musics') > -1 }"
        >
          <PlayIcon />
          <span>پخش آهنگ</span>
        </NavLink>
        <NavLink to="/favorites" className="sidebar__menu-item">
          <HeartIcon />
          <span>محبوب ترین ها</span>
        </NavLink>
        <NavLink to="/playlists" className="sidebar__menu-item">
          <SelectedlistIcon />
          <span>لیست پخش منتخب</span>
        </NavLink>
        <NavLink to="/upload" className={`sidebar__menu-item`}>
          <UploadmusicIcon />
          <span>آپلود آهنگ</span>
        </NavLink>
      </div>
    </aside>
  );
}
