import FixedSpinner from "@/assets/raw/another-spinner.svg";
import "./index.css"
export default function Loader() {
  return (
    <div className="loader">
      <img src={FixedSpinner} />
    </div>
  );
}
