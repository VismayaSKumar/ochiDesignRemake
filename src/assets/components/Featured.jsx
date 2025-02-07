import React from 'react'

function Featured() {
  return (
    <div className="h-sfull w-full bg-zinc-800 font-['Century_Gothic'] ">
        <div>
            <h1 className=" font-medium p-4 py-15 border-b-[0.5px] border-zinc-400  text-5xl text-white" >Featured Projects</h1>
        </div>
        <div className='cardSection flex justify-between h-full w-full px-20 py-20 relative'>
            <div className=' w-[600px] h-[400px] rounded-2xl overflow-hidden bg-zinc-300 '>
                <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg" alt="" />
                <div className='font-medium text-8xl tracking-tighter leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                {["FYDE"].splice("").map((item,index)=>(<span className='text-[#a5ea25]' >{item}</span>))}
                </div>
            </div>
            <div className=' w-[600px] h-[400px] rounded-2xl overflow-hidden bg-zinc-300 '>
                <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                <div className='font-medium text-8xl tracking-tighter leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                {["SOFTSTART"].splice("").map((item,index)=>(<span className='text-[#a5ea25]' >{item}</span>))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured