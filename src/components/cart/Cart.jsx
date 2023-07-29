import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem"

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const totalAmount = `$${Math.abs(cartContext.totalAmount.toFixed(2))}`
  const addItemHandler = (item) => {

    cartContext.addItem({
      ...item, amount: 1
    })
  }
  const removeItemHandler = (id) => {
    cartContext.removeItem(id)
  }
  const cartItems = cartContext.items.map(item => {
    return (
      <CartItem
        key={item.id}
        price={item.price}
        name={item.name}
        amount={item.amount}
        onAdd={addItemHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item.id)}
      />)
  });
  const hasItems = cartContext.items.length > 0
  return (
    <Modal hiddenCart={props.hiddenCart}>
      <ul>{cartItems} </ul>
      <div className={styles.total}>
        <span>{totalAmount}</span>
        <span>Итого</span>
        <div className={styles.actions}>
          <button className={styles["button-alt"]} onClick={props.hiddenCart}>Закрыть</button>
          {hasItems && <button className={styles.button} >Заказать</button>}
        </div>
      </div>
    </Modal>
  )

}

export default Cart