import "./index.css";
function HighlightedItem({ imageSource, title, price, description, onOrder }) {
  return (
    <div className="card-container">
      <img src={imageSource} alt={title} />
      <div className="detail">
        <h3>{title}</h3>
        <h4>{price}</h4>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <h4>Order a delivery</h4>
    </div>
  );
}

export default HighlightedItem;
