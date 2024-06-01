import React from 'react'

function MusicPlayer() {
  return (
    <div className='musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232a4e] rounded-xl mt-5'>
        <div className='upperPart'>
            <div className='profile flex'>
                <img src={require("../image/Mask Group 23.png")} alt="" className='w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full'/>
            </div>
            <div className='details'>
                <span className='text-[1rem]'>Tristam Bone Dry</span>
                <span className='text-sm text-gray-500'>Unknown Artist</span>
            </div>
        </div>
        <div className='lowerPart'></div>
    </div>
  )
}

export default MusicPlayer