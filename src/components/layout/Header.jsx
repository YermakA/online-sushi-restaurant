import React from "react";
import imgSushi from '../../assets/sushi.jpg'
import style from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {

  return (
    <React.Fragment>
      <header className={style.header}><h1>Сяськи-Масяськи</h1>
        <HeaderCartButton />
      </header>
      <div className={style['main-image']}>
        <img
          src={imgSushi}
          className={style.img}
          alt="фотография Суши" />
      </div>

    </React.Fragment>
  )
}

export default Header;