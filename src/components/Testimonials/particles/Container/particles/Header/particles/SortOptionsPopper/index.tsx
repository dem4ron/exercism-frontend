interface Props {
  handleSort: (sortOption: { label: string; value: string }) => void;
  sortOption: { label: string; value: string };
}
export function SortOptionsPopper({ handleSort, sortOption }: Props) {
  return (
    <div className="testimonials__container__header__sort-options">
      {SORT_OPTIONS.map((i) => (
        <button
          onClick={() => handleSort(i)}
          className={`${i.value === sortOption.value ? "--selected" : ""}`}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}

const SORT_OPTIONS = [
  {
    label: "Sort by newest first",
    value: "newest_first",
  },
  {
    label: "Sort by oldest first",
    value: "oldest_first",
  },
];
