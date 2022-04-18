import Search from "@/assets/raw/search.svg";
export function SearchInput() {
  return (
    <div className="testimonials__container__header__filter-input flex-row-align">
      <img src={Search} />
      <input type="text" placeholder="Filter by exercise title" />
    </div>
  );
}
