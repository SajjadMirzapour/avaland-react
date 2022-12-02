import "./header.scoped.scss";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="search">
          <input
            className="search__input"
            // v-model="searchValue"
            type="text"
            placeholder="جستجو..."
            // @input="handleSearch"
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
        <a className="header__profile" href="#">
          <span>سجاد میرزا</span>
          <img src="/images/arrow-down.svg" alt="#" />
        </a>
      </header>
    </div>
  );
}
