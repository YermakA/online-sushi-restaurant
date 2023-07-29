import CartContext from "../../../store/cart-context";
import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
const MealItem = (props) => {
  const structuredPrice = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext)
  const onAddToCartHandler = (amount) => {
    cartContext.addItem(
      {
        id: props.id,
        name: props.name,
        description: props.description,
        amount,
        price: +props.price
      })
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>
          {props.name}
        </h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{structuredPrice}</div>
      </div>
      <MealItemForm onAddToCart={onAddToCartHandler} id={props.id} />
    </li>)
}


export default MealItem