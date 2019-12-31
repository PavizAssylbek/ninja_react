import React from "react"
import s from  '../../../style/post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Luffy-Cropped.jpg" alt=""/>
      {props.message}
    </div>
  )
}

export default Post;