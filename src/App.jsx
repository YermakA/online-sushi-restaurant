import React from "react";
import Header from "./components/layout/Header.jsx";
import Meals from "./components/meals/Meals.jsx"

function App() {
  return (
    <React.Fragment>
      < Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
