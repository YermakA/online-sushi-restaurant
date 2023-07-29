import styles from './HeaderCartButton.module.css'
import CartIcon from './../cart/CartIcon';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)

  const [animatedClass, setAnimatedClass] = useState(false)
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return
    }
    setAnimatedClass(true)
    const timer = setTimeout(() => { setAnimatedClass(false) }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.items])
  const buttonClasses = `${styles.button} ${animatedClass && styles.bump}`
  return (
    <button className={buttonClasses} onClick={props.showCart} >
      <span className={styles.icon}><CartIcon /></span>
      <span >Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton