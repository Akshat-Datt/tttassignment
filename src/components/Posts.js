import React from 'react'
import style from "./Posts.module.css"
import posts from '../data/posts'
import { LuDot } from "react-icons/lu";
import { BiSolidLike } from "react-icons/bi";
function Posts() {
  return (
    <div>
      {posts.map((post)=>(
          <div>
            <div className={style.head}>
              <h2 className={style.title}>{post.title}</h2>
              <BiSolidLike className={style.like}/>
            </div>
            <p className={style.content}>{post.content}</p>
            <div className={style.row}>
              <p className={style.text}>{post.context}</p>
              <p className={style.detailsText}>by anujgosalia</p>
              <p className={style.details}>{post.date}</p>
              <LuDot className={style.dot}/>
              <p className={style.details}>{post.read} mins Read</p>
              <LuDot className={style.dot}/>
              <p className={style.details}>{post.views} Views</p>
            </div>
            <hr></hr>
          </div>
      ))}
    </div>
  )
}

export default Posts