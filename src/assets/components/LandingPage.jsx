import React from 'react'


function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2 text-white'>
        <div className='textStructure mt-40'>
            <div className='masker' >
            {["we create","eye opening","presentations"].map((item,index)=>(
                <div className='masker px-6  '>
                    <h1 className="uppercase font-['Century_Gothic'] font-semibold text-[85px] tracking-tighter leading-[6vw] ">{item} </h1>
                </div>
            ))} 
            </div>            
        </div>
        <div className='basement border-t-[1px] p-4 mt-30 border-zinc-600 flex items-center justify-between '>
            {["For public and private companies","For ios based companies "].map((item,index)=>(
                <span className='p-5 font-light leading-none tracking-tighter'>{item}</span>
            ))}
            <button className='uppercase p-3 rounded-full bg-white text-zinc-600'>
                Start the Project
            </button>
        </div>
        
    </div>
  )
}

export default LandingPage