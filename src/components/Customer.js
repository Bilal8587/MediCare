import React, { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import axiox from "axios"

function Customer() {
  const [user, setUser] = useState([])
  const [error, setError] = useState("")

  const userApiFun = async () => {
    try {
      const userData = await axiox.get(
        "https://admin.tomedes.com/api/v1/get-reviews?page=1"
      )
      return userData.data;
    } catch (error) {
      console.log("Error", error)
      return [];
    }
  }

  useEffect(() => {
    const getData = async () => {
        const result = await userApiFun();
        if(!result || result.length === 0){
            setError("Data faild")
        }else{
            setUser(result.data)
        }
    }

    getData()
  },[])

  return (
    <div className=" py-20">
      <h2 className="text-5xl font-semibold text-[#003B79]">
        What Our Customers Say
      </h2>
      <div className="flex justify-between overflow-auto gap-10 scrollbar">
            {
            user.slice(0,5).map((item) => (
                <ReviewCard key={item.ID } name={item.Name} review={item.Reviews} platform={item.Platform}/>
            ))
        }
        {/* <ReviewCard /> */}
      </div>
      
    </div>
  )
}

export default Customer
