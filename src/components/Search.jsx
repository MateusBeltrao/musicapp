import React from 'react'

function Search() {
  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]'>
        <div className='left flex-1'>
            <img src={require("../image/backgraphics.png")} alt='' className='absolute top-[22rem] left-[-47rem]'></img>
        
            <img src={require("../image/d1.png")} alt='' className='w-[16rem] top-[26rem] absolute'></img> {" "}
            <img src={require("../image/d2.png")} alt='' className='w-[9rem] top-[32.7rem] left-[7rem] absolute'></img> {" "}
            <img src={require("../image/d3.png")} alt='' className='w-[9rem] top-[33rem] left-[17rem] absolute'></img> {" "}
            <img src={require("../image/d4.png")} alt='' className='w-[17rem] top-[50rem] left-[2rem] absolute'></img> {" "}
        </div>

        <div className='right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]'>
            <div className='flex'>
              <div className='searchbar flex justify-start w-[100%]'>
                <input type="text" placeholder='Enter the keyword or URL' className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'/>
                <div className='searchIcon'>
                  <img src={require("../image/search.png")} alt="" className='w-[1.5rem]'/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Search