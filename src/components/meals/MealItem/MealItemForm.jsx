import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef()
  const getItemAmount = (e) => {
    e.preventDefault()
    const amountInput = amountInputRef.current.value
    if (amountInput.trim().length === 0 || +amountInput <= 0 || +amountInput > 10) {
      setIsAmountValid(false)
      return
    }
    setIsAmountValid(true)
    props.onAddToCart(+amountInput)
  }

  return (
    <form className={styles.form}>
      <Input ref={amountInputRef} label="Количество" input={{

        id: props.id,
        type: "number",
        min: "1",
        step: "1",
        defaultValue: "1",
      }} />
      <button onClick={getItemAmount}>Добавить</button>
      {!isAmountValid && <p>Введите количество от 1 до 10</p>}
    </form>
  )
}

export default MealItemForm