import React from "react"
import Button from "./Button"

function NewsLetter() {
  return (
    <div className="mt-10 mb-16">
      <div className="h-72 w-72 border-[50px] border-white shadow-lg rounded-full ml-[58rem]"></div>
      <div className="bg-[#007FF4] relative -mt-40  rounded-2xl py-16 px-32 ">
        <h3 className="text-4xl font-semibold text-center text-white">
          Subscribe to Newsletter
        </h3>
        <p className="text-sm text-center text-white font-normal mt-8">
          We have a wide experience in experience design and strategy,
        </p>
        <div className="bg-white flex justify-between px-10 py-5 rounded-xl mt-16">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-80 border-none outline-none"
          />
          <Button name={"Send Now"} />
        </div>
      </div>

    </div>
  )
}

export default NewsLetter
