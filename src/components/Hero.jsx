import React from 'react'
import DownloadAds from './DownloadAds'

function Hero() {
  return (
    <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]' >
        <div className='flex flex-col items-start justify-center h-[100%] text-[3rem]'>
         
            <span>Experience The</span>{" "}
            <span>
              <b>Best Qulaity Music</b>
            </span>
            <span className="text-[15px] text-[#525D6E]">
              Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
              Suspendisse in leo non risus tincidunt lobortis.
            </span>

            <div>
              <span className='text-[13px]'>
                Download now on IOS and Android
                <DownloadAds></DownloadAds>
              </span>
            </div>
          
        </div>
        <div className='images relative w-[50%]'>
          <img src={require("../image/backgraphics.png")} alt="" className='mockup absolute top-[-8rem] left-[19rem]'/>

          <img src={require("../image/p 1.png")} alt="" className='absolute top-[-15rem] h-[34rem] left-[13rem]'/>
          <img src={require("../image/p 2.png")} alt="" className='absolute top-[94px] w-[175px] left-[235px]'/>
          <img src={require("../image/p 3.png")} alt="" className='absolute top-[12rem] left-[13rem] w-[5px]'/>
          <img src={require("../image/p 4.png")} alt="" className='absolute w-[5rem] left-[12.5rem] top-[12rem]'/>
        </div>
    </div>
  )
}

export default Hero