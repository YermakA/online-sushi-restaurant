import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
const Cart = (props) => {

  const cartItems = 0;

  return (
    <Modal hiddenCart={props.hiddenCart}>
      <div className={styles.total}>
        <span>49.99</span>
        <span>Итого</span>
        <div className={styles.actions}>
          <button className={styles["button-alt"]} onClick={props.hiddenCart}>Закрыть</button>
          <button className={styles.button} >Заказать</button>
        </div>
      </div>
    </Modal>
  )

}

export default Cart