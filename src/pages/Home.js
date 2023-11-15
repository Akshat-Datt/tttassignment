import React from 'react'
import style from "./Home.module.css"
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Posts from '../components/Posts'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <hr className={style.break}></hr>
        <Posts></Posts>
    </div>
  )
}

export default Home