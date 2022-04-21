export default function Image({
  width,
  height,
  src,
  className
}: {
  width: string;
  height: string;
  src: string;
  className?:string;
}) {
  return (
    <div style={{ width, height }}>
      <img className={className} width={width} height={height} src={src} />
    </div>
  );
}
