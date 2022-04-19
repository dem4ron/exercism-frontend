import { TestimonialRow } from "./TestimonialRow";
import { useResults } from "@/hooks";

export function Content() {

const { status, results } = useResults();


  return (
    <div>
      {status === "fulfilled" &&
        results.results.map((i) => <TestimonialRow key={i.id} result={i} />)}
    </div>
  );
}
