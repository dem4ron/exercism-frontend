import { MouseEventHandler, ReactNode } from "react";
import LeftArrow from "@/assets/raw/left-arrow.svg";
import RightArrow from "@/assets/raw/right-arrow.svg";

interface Props {
  kind?: "previous" | "next";
  disabled?: boolean;
  active?: boolean;
  children?: ReactNode;
  onClick: MouseEventHandler;
}

export function PaginationButton({
  kind,
  disabled,
  active,
  children,
  onClick,
}: Props) {
  return (
    <button
      aria-label="pagination-button"
      onClick={onClick}
      disabled={disabled}
      className={`${active ? "--active" : ""} ${kind ? "--stepper" : ""}`}
    >
      {!kind ? children : kind === "previous" ? <Prev /> : <Next />}
    </button>
  );
}

function Prev() {
  return (
    <div className="flex-row-align">
      <img
        src={LeftArrow}
        width="12px"
        height="12px"
        style={{ marginRight: "10.4px" }}
      />
      <div>Previous</div>
    </div>
  );
}

function Next() {
  return (
    <div className="flex-row-align">
      <div>Next</div>
      <img
        src={RightArrow}
        width="12px"
        height="12px"
        style={{ marginLeft: "10.4px" }}
      />
    </div>
  );
}

export function More() {
  return <div>...</div>;
}
