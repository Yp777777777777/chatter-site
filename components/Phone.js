export default function Phone({ children, className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-bezel">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
