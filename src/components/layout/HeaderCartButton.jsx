import styles from './HeaderCartButton.module.css'
import CartIcon from './../cart/CartIcon';

const HeaderCartButton = (props) => {

  return (
    <button className={styles.button} onClick={props.showCart}>
      <span className={styles.icon}><CartIcon /></span>
      <span >Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton