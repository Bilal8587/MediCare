import React from "react"
import pro from '../images/profile.jpeg'

function ReviewCard({name, review, platform}) {
  return (
    <div className="bg-white shadow-lg mt-16 w-[32rem] rounded-2xl  relative px-10 py-5 ">
      <div
        className="bg-[#007FF4] h-16 w-16 rounded-full text-white text-5xl p-4
      text-center mt-[-3rem] ml-[26.5rem] ">"</div>
      <p className=" font-normal tracking leading-6 text-[#002348] h-16">{review}
      </p>
      <div className="flex  mt-14 gap-5">
        <img
          src={pro}
          width={"50px"}
          height={"40px"}
          className="rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#002348]">
            {name}
          </h3>
          <p className="text-sm text-[#002348]">{platform}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
