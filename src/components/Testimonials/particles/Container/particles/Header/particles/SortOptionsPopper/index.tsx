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

const SORT_OPTIONS: OrderByObj[] = [
  {
    label: "Sort by newest first",
    value: "newest_first",
  },
  {
    label: "Sort by oldest first",
    value: "oldest_first",
  },
];
