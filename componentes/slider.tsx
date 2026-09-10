'use client'
import { useState, useContext, useEffect} from "react"
import { SlideContext } from "@/contexts/slideCtx"
import '../app/globals.css'


export const Slider = () => {

    const SlideCtx = useContext(SlideContext)

   useEffect(() => {
        const interval = setInterval(() => {
            SlideCtx?.NextS()
        }, 5000)
        
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className=" w-screen h-100 overflow-hidden">
                
                
                <div className={` h-full w-[300vw] flex`} style={{marginLeft:`-${SlideCtx?.slider[0].pos ?? 0}vw`}}>

                    <div className="slide1 h-full w-screen flex flex-col items-center">
                       
                        <h1 className="animate-pulse line-height font-Oswald text-4xl my-5 text-center uppercase text-white text-shadow-sm text-shadow-gray-600">Programando com excelência</h1>

                        <button className="bg-indigo-600 p-2 rounded-sm font-caacupe cursor-pointer hover:bg-indigo-800">Conheça os meus projetos</button>
                        <img src="/imgS1.png" className="w-80 h-100 cover" alt="" />
                        
                    </div>
                
                    <div className={`slide2 h-full w-screen`}></div>
                    <div className={`slide3 h-full w-screen`}></div>
                    
                </div>
                
            </div>
             <div className="flex w-18 items-center justify-between my-[-30] mx-auto">
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===0?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set1() }></button>
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===100?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set2()}></button>
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===200?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set3()}></button>
            </div>
            
        </>
        


    )

}