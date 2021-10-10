function Product(props) {
  return (
    <div className="image">
      <img className="show-modal" src={props.src} id={props.id} alt="Jacket" />
      <span className="caption">{props.description}</span>
    </div>
  );
}
export default Product;
