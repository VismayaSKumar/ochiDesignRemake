import React, { useEffect, useState } from 'react'


function Eye() {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX = mouseX-window.innerWidth/2;
            let deltaY = mouseY-window.innerHeight/2;

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='w-full h-screen flex justify-center items-centre overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className=' h-full w-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className=' w-1/3 flex justify-between absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center '>
                    <div className='w-[9vw] h-[9vw] rounded-full bg-black relative '>
                        <div style={{ transform:`rotate(${rotate}deg)` }} className={`w-full h-4 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  `}>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center '>
                    <div className='w-[9vw] h-[9vw] rounded-full bg-black relative '>
                        <div style={{ transform:`rotate(${rotate}deg)` }} className={`w-full h-4 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  `}>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eye