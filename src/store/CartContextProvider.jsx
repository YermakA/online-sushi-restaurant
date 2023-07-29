import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateItems = state.items.concat(action.item)
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }

  return defaultCartState
}

const CartContextProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState)

  const addItem = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    })
  }
  const removeItem = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    })
  }


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider