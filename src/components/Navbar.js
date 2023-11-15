import React from 'react'
import style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={style.navbar}>
        <img src={require("../images/tttlogo.png")} alt='logo' className={style.logo}/>
        <div className={style.vl}></div>
        <p className={style.stories}>S T O R I E S</p>
        <button type="button" className={`btn btn-warning ${style.courses}`}>Courses</button>
    </div>
  )
}

export default Navbar