import RedDot from "../RedDot";
import { useToggle } from "@/hooks";
interface Props {
  src: string;
  alt:string;
}
export default function IndicatorToggleButton({ src, alt }: Props) {
  let init = Math.random() > 0.5;
  const [isOn, toggle] = useToggle(init);

  return (
    <button className="nav-bar__indicator-button" onClick={toggle}>
      {isOn && (
        <RedDot
          className="nav-bar__indicator-button__red-dot"
          size="8px"
          bordered
        />
      )}
      <img alt={alt} src={src} />
    </button>
  );
}
