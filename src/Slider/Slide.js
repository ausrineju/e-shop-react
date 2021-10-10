function Slide(props) {
  return (
    <div
      className="slide"
      style={{ transform: `translate(${120 * (0 - props.id)}}%)` }}
    >
      <h2 className="slider__header">{props.brand}</h2>
      <img src={props.src} alt="Photo 1" />
      <div className="media-body">
        <h5 className="caption">Description</h5>
        <p>{props.description}</p>
        <a href="#" className="stretched-link">
          Our page.
        </a>
      </div>
    </div>
  );
}
export default Slide;
