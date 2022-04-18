import { PaginationButton, More } from "./particles";

export function Footer() {
  return (
    <div className="testimonials__container__footer flex-row-align">
      <PaginationButton disabled kind="previous" />

      <div className="testimonials__container__footer__pages flex-row-align">
        <PaginationButton>1</PaginationButton>
        <PaginationButton active>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <More />
        <PaginationButton>4</PaginationButton>
      </div>
        <PaginationButton kind="next" />
    </div>
  );
}
