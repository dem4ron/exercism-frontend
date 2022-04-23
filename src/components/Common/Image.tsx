export default function Image({
  width,
  height,
  src,
  className,
  alt,
}: {
  width: string;
  height: string;
  src: string;
  className?: string;
  alt?: string;
}) {
  return (
    <div style={{ width, height }}>
      <img
        className={className}
        width={width}
        alt={alt}
        height={height}
        src={src}
      />
    </div>
  );
}
