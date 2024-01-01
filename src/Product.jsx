import { Link } from "react-router-dom";
import Button from "./Button";

export default function Product(props) {
  const { details } = props;
  const {cart} = props;

  const productFromCart = cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;
   
  return (
    <div className="product">
      
      <div className="product-image-container">
      <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
          />
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
        </Link>
      </div>
      
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      
      
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button
              outline
              onClick={() => props.onProductDelete(details.id)}
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>
        <div className="buttons">
        <Button outline onClick={() => props.onProductAddByOne(details)}>
          +
        </Button >
        <div  className="priceBadge priceFont" >
          ${details.price}
        </div>
        <Button outline onClick={() => props.onProductDeleteByOne(details)}>
          -
        </Button>
        </div>
      </div>
    </div>
  );
}
