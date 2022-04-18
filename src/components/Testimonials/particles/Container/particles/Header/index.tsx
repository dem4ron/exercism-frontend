import { useState, useCallback } from "react";
import {
  LanguageSelectButton,
  SearchInput,
  SortButton,
  SortOptionsPopper,
} from "./particles";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [sortOption, setSortOption] = useState({
    label: "Sort by newest first",
    value: "newest_first",
  });
  const handleClick = useCallback(() => setIsOpen((o) => !o), []);
  const handleSort = useCallback(
    (sortOption: { label: string; value: string }) => {
      setSortOption(sortOption);
      setIsOpen(false);
    },
    []
  );

  return (
    <div className="testimonials__container__header flex-row-align">
      <div className="testimonials__container__header--left flex-row-align">
        <LanguageSelectButton />
        <SearchInput />
      </div>
      <div className="testimonials__container__header__sorter">
        <SortButton handleClick={handleClick} sortOption={sortOption} />
        {isOpen && (
          <SortOptionsPopper handleSort={handleSort} sortOption={sortOption} />
        )}
      </div>
    </div>
  );
}
