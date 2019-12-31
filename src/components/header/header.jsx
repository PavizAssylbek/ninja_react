import React from "react";
import logo from "../../images/logo.png";
import s from  '../../style/header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="icon"/>
    </header>
  )
}

export default Header;