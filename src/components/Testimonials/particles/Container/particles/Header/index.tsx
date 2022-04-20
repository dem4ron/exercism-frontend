import { useChangeOrder, useResults } from "@/hooks";
import { useState, useCallback } from "react";
import Loader from "../Content/Loader";
import {
  LanguageSelectButton,
  SearchInput,
  SortButton,
  SortOptionsPopper,
} from "./particles";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { currSortObj: sortObj, setSortObj } = useChangeOrder();
  
  const handleClick = useCallback(() => setIsOpen((o) => !o), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  const {status} = useResults();
  

  return (
    <div className="testimonials__container__header flex-row-align">
      <div className="testimonials__container__header--left flex-row-align">
        <LanguageSelectButton />
        <SearchInput />
      </div>
      <div className="testimonials__container__header__sorter">
        <SortButton
          handleClick={handleClick}
          isOpen={isOpen}
          sortObj={sortObj}
        />
        {isOpen && (
          <SortOptionsPopper
            setSortObj={setSortObj}
            sortObj={sortObj}
            onClose={onClose}
          />
        )}
      </div>
     { status==="loading"&&<Loader/>}
    </div>
  );
}
