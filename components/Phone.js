export default function Phone({ src, alt, w, h, priority = false }) {
  return (
    <div className="phone">
      <img src={src} alt={alt} width={w} height={h} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}
