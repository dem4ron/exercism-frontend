import { OrderByObj } from "@/store/storeTypes";

interface Props {
  toggleIsOpen: () => void;
  sortObj: OrderByObj;
  setSortObj: ({}: OrderByObj) => void;
}

export function SortOptionsPopper({
  setSortObj,
  sortObj,
  toggleIsOpen,
}: Props) {
  return (
    <div className="testimonials__container__header__sort-options">
      {SORT_OPTIONS.map((i) => (
        <button
          key={i.value}
          onClick={(e) => {
            setSortObj(i);
            toggleIsOpen();
          }}
          className={`${i.value === sortObj.value ? "--selected" : ""}`}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}

export const SORT_OPTIONS: OrderByObj[] = [
  {
    label: "Sort by Most Recent",
    value: "newest_first",
  },
  {
    label: "Sort by Least Recent",
    value: "oldest_first",
  },
];
