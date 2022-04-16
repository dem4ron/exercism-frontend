import "./index.css";
interface Props {
  className?: string;
  size: string;
  bordered?: boolean;
  inside?: string;
}
export default function RedDot({
  className,
  size,
  bordered = false,
  inside,
}: Props) {
  return (
    <div
      className={`${className} the-red-dot ${bordered ? "bordered" : ""}`}
      style={{ width: size, height: size }}
    >
      {inside}
    </div>
  );
}
