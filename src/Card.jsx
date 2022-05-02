export default function Card({
  icon,
  num,
  title,
  selected,
  onClick,
  children,
}) {
  return (
    <div className={"card " + (selected ? "selected" : "")} onClick={onClick}>
      <div className="card--header">
        {num && <span className={typeof num}>{num}</span>}
        {icon && <img src={icon} alt={title} />}
        <span className="circle"></span>
      </div>
      <h4 className="card--title">{title}</h4>
      <div className="card--body">{children}</div>
    </div>
  );
}
