import Image from "@/components/Common/Image";
import verticalMenu from "@/assets/raw/navigation-menu-vertical.svg";
import Erik from "@/assets/erik.png";
export function UserMenu() {
  return (
    <button className="flex-row-align nav-bar__user-menu-button">
      <Image
        src={Erik}
        className="nav-bar__profile-picture"
        alt="your profile picture"
        width="42px"
        height="42px"
      />
      <Image src={verticalMenu} alt="vertical menu button" width="6px" height="18px" />
    </button>
  );
}
