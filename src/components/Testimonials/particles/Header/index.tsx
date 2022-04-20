import Divider from "@/assets/raw/divider.svg";
import HappyBadge from "@/assets/raw/happy-badge.svg";
import { useResults } from "@/hooks";
export function Header() {
  const { results } = useResults();

  return (
    <div className="testimonials__header flex-column-align">
      <img src={HappyBadge} />
      <div className="flex-row-align">
        <h1>Testimonials I've left</h1>
        <div className="testimonials__header__counter">
          {results ? results.pagination.total_count : 0}
        </div>
      </div>
      <img src={Divider} />
    </div>
  );
}
