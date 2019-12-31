import React from "react"
import s from  '../../style/saidebar.module.css';
import {NavLink} from "react-router-dom"

const Saidebar = () => {
  return (
    <nav className={s.nav}>
      <ul>
          <li className={s.item}>
            <NavLink to="/content" activeClassName={s.activeLink}>Content</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/news" activeClassName={s.item}>News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music" activeClassName={s.item}>Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/settings" activeClassName={s.item}>Settings</NavLink>
          </li>
      </ul>
    </nav>
  )
}


export default Saidebar;