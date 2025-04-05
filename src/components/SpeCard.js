    import React from 'react'
    
    function SpeCard({name, position, image}) {
      return (
        <div className="h-96 w-56 mt-10 mb-8 shadow-lg rounded-2xl">
          <div className="h-[70%] bg-[#AED3E2] rounded-t-2xl">
            <img src={image} className='h-[100%] w-[100%]' />
          </div>
          <div className="bg-white  h-[30%] rounded-b-2xl px-5 py-4">
            <h2 className="text-lg font-bold text-[#002348]">{name}</h2>
            <p className='text-sm mt-3'>{position}</p>
          </div>
        </div>
      )
    }
    
    export default SpeCard