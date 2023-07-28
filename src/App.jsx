import React from "react";
import Header from "./components/layout/Header.jsx";
import Meals from "./components/meals/Meals.jsx"
import Cart from "./components/cart/Cart"

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
