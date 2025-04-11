import React from "react"
import pro from "../images/profile.jpeg"

function ReviewCard({ name, review, platform }) {
  return (
    <div className="customer_card ">
      <div className="queat">"</div>

      <p className="description">{review}</p>

      <div className="information">
        <img
          src={pro}
          width={"50px"}
          height={"40px"}
          className="rounded-full"
        />
        <div>
          <h3>{name}</h3>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
