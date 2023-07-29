import styles from './HeaderCartButton.module.css'
import CartIcon from './../cart/CartIcon';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)


  return (
    <button className={styles.button} onClick={props.showCart}>
      <span className={styles.icon}><CartIcon /></span>
      <span >Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton