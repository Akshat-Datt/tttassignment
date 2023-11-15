import React from "react";
import style from "./Profile.module.css";
import data from "../data/data";
import posts from "../data/posts";
import { MdVerified } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
function Profile() {
  return (
    <div>
      <img
        src={require("../images/Anuj.png")}
        alt="profile"
        className={style.profile}
      />
      <img
        src={require("../images/Cover.jpg")}
        alt="cover"
        className={style.cover}
      />
      <div className={style.essentials}>
        <p className={style.name}>{data.name}</p>
        <MdVerified className={style.tick} />
      </div>
      <div className={style.matrix}>
        <div className={style.numbers}>
          <p className={style.number}>{data.followers}</p>
          <p className={style.number}>{data.following}</p>
        </div>
        <div className={style.labels}>
          <p className={style.label}>Followers</p>
          <p className={style.label}>Following</p>
        </div>
      </div>
      <p className={style.about}>{data.about}</p>
      <p className={style.about}>
        <a
          href="https://www.instagram.com/anujgosalia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
          className={style.link}
        >
          http://www.instagram.com/anujgosalia
        </a>
      </p>
      <div className={style.stats}>
        <MdStars className={style.star} />
        <p className={style.nos}>12</p>
        <BiSolidLike className={style.like} />
        <p className={style.nos}>12</p>
        <FaEye className={style.views} />
        <p className={style.nos}>486</p>
        <GoHeartFill className={style.heart} />
        <p className={style.nos}>12</p>
      </div>
      <div className={style.contain}>
        <p className={style.posts}>{posts.length} Posts</p>
      </div>
    </div>
  );
}

export default Profile;
