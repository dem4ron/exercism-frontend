import { TestimonialRow } from "./TestimonialRow";
import { useResults } from "@/hooks";
import { NoResults } from "./NoResults";

export function Content() {
  const { results, init: coldStart } = useResults();

  return (
    <div className="testimonials__container__content">
      {!coldStart && results.results.length > 0 ? (
        results.results.map((i) => <TestimonialRow key={i.id} result={i} />)
      ) : (
        <NoResults />
      )}
    </div>
  );
}
