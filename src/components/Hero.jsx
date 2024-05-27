import React from 'react'
import DownloadAds from './DownloadAds'

function Hero() {
  return (
    <div className='wrapper bg-[#081730] flex items-center 
    justify-between px-[5rem] rounded-b-[5rem] w-[100%] 
    h-[35rem] relative' >
        <div className=' flex flex-col items-start justify-center h-[100%]'>
         
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
        <div className='images'>Images</div>
    </div>
  )
}

export default Hero