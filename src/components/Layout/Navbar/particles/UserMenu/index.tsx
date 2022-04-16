import verticalMenu from "@/assets/raw/navigation-menu-vertical.svg";
import Erik from "@/assets/erik.png";
export function UserMenu() {
  return (
    <button className="flex-row-align nav-bar__user-menu-button">
      <img className="nav-bar__profile-picture" src={Erik} />
      <img src={verticalMenu} />
    </button>
  );
}
