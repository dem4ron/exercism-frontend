import Divider from "@/assets/raw/divider.svg";
import HappyBadge from "@/assets/raw/happy-badge.svg";
export function Header() {
  return (
    <div className="testimonials__header flex-column-align">
      <img src={HappyBadge} />
      <div className="flex-row-align">
        <h1>Testimonials I've left</h1>
        <div className="testimonials__header__counter">47</div>
      </div>
      <img src={Divider} />
    </div>
  );
}
