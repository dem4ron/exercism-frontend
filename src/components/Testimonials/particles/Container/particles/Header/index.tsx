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
  const [isTrackSelectorOpen, toggleTrackSelector, closeTrackSelector] =
    useToggle();
  const [isSortOptionsOpen, toggleSortOptions, closeSortOptions] = useToggle();

  const { status } = useResults();

  return (
    <div className="testimonials__container__header flex-row-align">
      <div className="testimonials__container__header--left flex-row-align">
        <LanguageSelectButton
          onBlur={() => closeTrackSelector(200)}
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
          onBlur={() => closeSortOptions(200)}
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

      {(status === "loading" || status === "rejected") && <Loader />}
    </div>
  );
}
