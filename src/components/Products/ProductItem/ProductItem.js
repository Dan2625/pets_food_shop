import { useContext } from 'react';

import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/cart-context';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default ProductItem;