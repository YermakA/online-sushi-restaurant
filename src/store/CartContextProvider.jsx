import CartContext from "./cart-context"


const CartContextProvider = (props) => {

  const addItem = (item) => { }
  const removeItem = (id) => { }


  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider