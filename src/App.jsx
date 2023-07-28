import React, { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Meals from "./components/meals/Meals.jsx"
import Cart from "./components/cart/Cart"

function App() {

  const [activeCart, setActiveCart] = useState(false);

  const onshowCartHandler = () => {
    setActiveCart(true)
  }
  const onHiddenCartHandler = () => {
    setActiveCart(false)
  }
  return (
    <React.Fragment>
      {activeCart && <Cart hiddenCart={onHiddenCartHandler} />}
      <Header showCart={onshowCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
