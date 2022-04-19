import Search from "@/assets/raw/search.svg";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { useState } from "react";

export function SearchInput() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useSearchQuery(debouncedValue);

  return (
    <div className="testimonials__container__header__filter-input flex-row-align">
      <img src={Search} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Filter by exercise title"
      />
    </div>
  );
}
