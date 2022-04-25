import Search from "@/assets/raw/search.svg";
import Image from "@/components/Common/Image";
import { useDebounce, useSearchQuery } from "@/hooks";

import { memo, useState } from "react";

function _SearchInput() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useSearchQuery(debouncedValue);

  return (
    <div
      data-testid="filter input"
      aria-label="filter by exercise"
      className="testimonials__container__header__filter-input flex-row-align"
    >
      <Image src={Search} alt="magnifier" width="25px" height="25px" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="search-input"
        placeholder="Filter by exercise title"
      />
    </div>
  );
}

export const SearchInput = memo(_SearchInput);
