import { useOutletContext } from "react-router-dom";
import Button from "./Button";

export default function ProductDetailInfo({ onProductAddByOne , onProductDeleteByOne }) {
  const product = useOutletContext();

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <div>
        
      </div>
      <div className="buttons">
      <Button onClick={() => onProductAddByOne(product)}>+</Button>
      <span className="priceFont priceBadge" >${product.price}</span>
      <Button onClick={() => onProductDeleteByOne(product)}>-</Button>
      </div>
    </>
  );
}
