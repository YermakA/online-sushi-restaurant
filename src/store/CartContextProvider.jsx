import { act } from "react-dom/test-utils"
import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const existingItemIndex = state.items.findIndex(item => item.name === action.item.name);
    let updateItems
    let updateItem
    const existingItem = state.items[existingItemIndex]
    if (existingItem) {

      updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      }
      updateItems = [...state.items]
      updateItems[existingItemIndex] = updateItem
    } else {
      updateItems = state.items.concat(action.item)
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  if (action.type === "REMOVE_ITEM") {

    const findItemIndex = state.items.findIndex(item => item.id === action.id)
    const findItem = { ...state.items[findItemIndex] }
    findItem.amount = findItem.amount - 1
    let remainingItems
    if (findItem.amount === 0) {
      remainingItems = [...state.items.filter(item => item.id !== findItem.id)]
    } else {
      remainingItems = [...state.items]
      remainingItems[findItemIndex] = findItem
    }
    const updateTotalAmount = state.totalAmount - findItem.price
    return {
      items: remainingItems,
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