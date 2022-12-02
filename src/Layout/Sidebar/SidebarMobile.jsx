import "./sidebarMobile.scoped.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as HeartIcon } from "src/components/Icons/HeartIcon.svg";
import { ReactComponent as HomeIcon } from "src/components/Icons/HomeIcon.svg";
import { ReactComponent as SelectedlistIcon } from "src/components/Icons/SelectedlistIcon.svg";
import { ReactComponent as UploadmusicIcon } from "src/components/Icons/UploadmusicIcon.svg";

export default function Sidebar() {
  return (
    <nav>
      <div className="menu">
        <NavLink
          to="/"
          className="menu__item"
          // v-bind:className="{ active: $route.path == '/' }"
        >
          <HomeIcon />
          <span>صفحه اصلی</span>
        </NavLink>
        <NavLink
          to="/favorites"
          className="menu__item"
          // v-bind:className="{ active: $route.path == '/favorites' }"
        >
          <HeartIcon />
          <span>محبوب ترین ها</span>
        </NavLink>
        <NavLink
          to="/playlists"
          className="menu__item"
          //   v-bind:className="{
          //   active: $route.path.indexOf('/playlists') > -1,
          // }"
        >
          <SelectedlistIcon />
          <span>لیست پخش منتخب</span>
        </NavLink>
        <NavLink
          to="/upload"
          className="menu__item"
          // v-bind:className="{ active: $route.path == '/upload' }"
        >
          <UploadmusicIcon />
          <span>آپلود آهنگ</span>
        </NavLink>
      </div>
    </nav>
  );
}
