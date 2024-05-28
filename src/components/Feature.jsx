import React from 'react'

function Feature({icon, title}) {
  return (
    <div className='feature flex items-center justify-center flex-col relative text-center mx-12'>
        <div className='icon bg-[#081730 rounded-2x1 p-4'>
            <img src={require(`../image/${icon}.png`)} alt="" className='w-[3rem]'/>
        </div>

        <span className='mt-5'>{title}</span>

        <span className='text-[#707070' mt-4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus nostrum illum laborum tempora eligendi, delectus, magnam ducimus veniam natus at maxime autem perferendis aspernatur cumque quisquam quo. Doloribus, odit?
        </span>

        <span className='text-[#e600ff] underline mt-[3rem] hover:cursor-pointer'>
            Learn more
        </span>
    </div>
  )
}

export default Feature