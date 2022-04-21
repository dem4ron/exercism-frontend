import { useTurnPages } from "@/hooks";
import { PaginationButton, More } from "./PaginationButton";

export function Footer() {
  const { pick, page, maxPage, pageButtons } = useTurnPages();

  return (
    <div className="testimonials__container__footer flex-row-align">
      <PaginationButton
        onClick={() => pick(page - 1)}
        disabled={page === 1}
        kind="previous"
      />

      <div className="testimonials__container__footer__pages flex-row-align">
        <PaginationButton onClick={() => pick(1)} active={page === 1}>
          1
        </PaginationButton>
        {page - 2 > 2 && <More />}
        {pageButtons.map((i) => (
          <PaginationButton key={i} active={page === i} onClick={() => pick(i)}>
            {i}
          </PaginationButton>
        ))}
        {pageButtons[pageButtons.length - 1] < maxPage - 1 && <More />}

        {maxPage > 1 && (
          <PaginationButton
            onClick={() => pick(maxPage)}
            active={page === maxPage}
          >
            {maxPage}
          </PaginationButton>
        )}
      </div>
      {
        <PaginationButton
          onClick={() => pick(page + 1)}
          disabled={page === maxPage}
          kind="next"
        />
      }
    </div>
  );
}
