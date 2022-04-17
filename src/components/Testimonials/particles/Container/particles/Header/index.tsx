import LanguageIcon from "@/assets/raw/exercism-language-icon.svg";
import DownArrow from "@/assets/raw/down-arrow.svg";
import Search from "@/assets/raw/search.svg";
export function Header() {
  return (
    <div className="testimonials__container__header flex-row-align">
      <div className="testimonials__container__header--left flex-row-align">
        <button className="testimonials__container__header__language-select flex-row-align">
          <img src={LanguageIcon} width="42px" />
          <img src={DownArrow} width="13px" />
        </button>

        <div className="testimonials__container__header__filter-input flex-row-align">
          <img src={Search} />
          <input type="text" placeholder="Filter by exercise title" />
        </div>
      </div>

      <div className="testimonials__container__header__sorter">
        <button className="testimonials__container__header__sort-button flex-row-align">
          <div>Sort by newest first</div>
          <img src={DownArrow} width="24px" />
        </button>
        <div className="testimonials__container__header__sort-options">
          <button>Sort by newest first</button>
          <button>Sort by oldest first</button>
        </div>
      </div>

    </div>
  );
}
