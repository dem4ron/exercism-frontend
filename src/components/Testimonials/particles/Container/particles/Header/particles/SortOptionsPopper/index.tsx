import { OrderByObj } from "@/store/storeTypes";

interface Props {
  onClose: () => void;
  sortObj: OrderByObj;
  setSortObj: ({}: OrderByObj) => void;
}

export function SortOptionsPopper({ setSortObj, sortObj, onClose }: Props) {
  return (
    <div className="testimonials__container__header__sort-options" onClick={e=>e.stopPropagation()}>
      {SORT_OPTIONS.map((i) => (
        <button
          key={i.value}
          onClick={(e) => {
            setSortObj(i);
            onClose();
            e.stopPropagation()

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
