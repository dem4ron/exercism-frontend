import { OrderByObj } from "@/stores/store";

interface Props {
  onClose: () => void;
  sortObj: OrderByObj;
  setSortObj: ({}: OrderByObj) => void;
}

export function SortOptionsPopper({ setSortObj, sortObj, onClose }: Props) {
  return (
    <div className="testimonials__container__header__sort-options">
      {SORT_OPTIONS.map((i) => (
        <button
          onClick={() => {
            setSortObj(i);
            onClose();
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
