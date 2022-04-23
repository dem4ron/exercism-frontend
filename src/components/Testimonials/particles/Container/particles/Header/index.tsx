import { useChangeOrder, useResults, useToggle } from "@/hooks";
import Loader from "../Content/Loader";
import {
  LanguageSelectButton,
  SearchInput,
  SortButton,
  SortOptionsPopper,
  TrackSelector,
} from "./particles";

export function Header() {
  const [sortObj, setSortObj] = useChangeOrder();
  const [isTrackSelectorOpen, toggleTrackSelector] = useToggle();
  const [isSortOptionsOpen, toggleSortOptions] = useToggle();

  const { status } = useResults();

  return (
    <div className="testimonials__container__header flex-row-align">
      <div className="testimonials__container__header--left flex-row-align">
        <LanguageSelectButton
          toggleIsOpen={toggleTrackSelector}
          isOpen={isTrackSelectorOpen}
        />
        {isTrackSelectorOpen && (
          <TrackSelector toggleIsOpen={toggleTrackSelector} />
        )}

        <SearchInput />
      </div>

      <div className="testimonials__container__header__sorter">
        <SortButton
          toggleIsOpen={toggleSortOptions}
          isOpen={isSortOptionsOpen}
          sortObj={sortObj}
        />
        {isSortOptionsOpen && (
          <SortOptionsPopper
            setSortObj={setSortObj}
            sortObj={sortObj}
            toggleIsOpen={toggleSortOptions}
          />
        )}
      </div>

      {status === "loading" && <Loader />}
    </div>
  );
}
