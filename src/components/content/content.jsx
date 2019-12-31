import React from "react"
import Post from './post/post'
import s from  '../../style/content.module.css';

const Content = () => {
  return (
  <div>
    <div>
      <img src='https://vignette.wikia.nocookie.net/onepiece/images/b/b1/Thousand_Sunny_Infobox.png/revision/latest?cb=20140110105809&path-prefix=ru' />
    </div>
    <h2>My Post</h2>
    <div className={s.df}>
      <input type="text"/>
      <a className="btn__primary"><label>ADD POST</label></a>
    </div>
    <div className={s.post}>
      <Post message="Hi My Dear" />
      <Post message="How are you?" />
      <Post message="I'm fine, thanks" />
    </div>
  </div>
  )
}

export default Content;