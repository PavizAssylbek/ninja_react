import React from "react"
import s from  '../../style/dialogs.module.css';

const Dialogs = () => {
  return (
  <div className={s.dialogs}>
    <div className={s.left}>
      <div className={s.content}>
        <img src="https://sun1.tele2-kz-astana.userapi.com/c851036/v851036878/1d269e/jWhqnlpjt5Q.jpg?ava=1" alt="#"/>
          <div className={s.content_body}>
            <h4>Joker</h4>
            <span>last message</span>
          </div>
      </div>
      <div className={s.content}>
        <img src="https://sun2.tele2-kz-astana.userapi.com/c629414/v629414861/5b98/vouCZZe8_6g.jpg?ava=1" alt="#"/>
          <div className={s.content_body}>
            <h4>King</h4>
            <span>last message</span>
          </div>
      </div>
    </div>
    <div className={s.right}>

    </div>
  </div>
  )
}

export default Dialogs;