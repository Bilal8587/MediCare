import React from "react"
import Button from "./Button"
import "../styles/newsLetter.css"

function NewsLetter() {
  return (
    <div className="news_section">
      <div className="third_circle"></div>
      <div className="news_card">
        <h3>Subscribe to Newsletter</h3>
        <p>We have a wide experience in experience design and strategy,</p>
        <div className="input_box">
          <input type="text" placeholder="Enter Your Email Address" />
          <Button name={"Send Now"} />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
