import { TestimonialRow } from "./TestimonialRow";
import { useResults } from "@/hooks";
import { NoResults } from "./NoResults";
import { memo, useEffect, useRef } from "react";
import { useScrollTop } from "@/hooks/useScrollTop";

function _Content() {
  const { results, init: coldStart } = useResults();
  const tref = useScrollTop(results);

  return (
    <div className="testimonials__container__content" ref={tref}>
      {!coldStart && results && results.results.length > 0
        ? results.results.map((i) => <TestimonialRow key={i.id} result={i} />)
        : !coldStart && <NoResults />}
    </div>
  );
}

export const Content = memo(_Content);
