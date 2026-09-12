'use client'
import { useState, useContext, useEffect} from "react"
import { SlideContext } from "@/contexts/slideCtx"
import '../app/globals.css'


export const Slider = () => {

    const SlideCtx = useContext(SlideContext)

   useEffect(() => {
        const interval = setInterval(() => {
            SlideCtx?.NextS()
        }, 200000)
        
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="h-100 overflow-hidden">
                
                
                <div className={` h-full w-[300vw] flex`} style={{marginLeft:`-${SlideCtx?.slider[0].pos ?? 0}vw`}}>

                    <div className="slide1 h-full w-screen flex flex-col md:flex-row">

                        <div className="w-full flex flex-col items-center justify-center md:items-start md:justify-center md:pl-10">
                            <h1 className="font-Oswald text-4xl text-shadow-lg text-shadow-purple-600 my-5 text-center uppercase text-white md:my-0 md:mb-5  md:text-left lg:text-6xl">Programando com excelência</h1>
                            <button className="bg-indigo-600 animate-pulse text-shadow-md w-auto text-shadow-blue-600 p-2 rounded-sm font-caacupe cursor-pointer lg:text-xl lg:mt-5 hover:bg-indigo-800">Conheça os meus projetos</button>
                        </div>
                      
                        <img src="/imgS1.png" className="w-80 h-100 mx-auto cover md:w-90 md:h-full" alt="" />
                        
                    </div>
                
                    <div className={`slide2 h-full w-screen flex flex-col items-center md:flex-row md:justify-between lg:justify-around`}>
                        <div className="flex flex-col items-center justify-center-center md:pl-10">
                            <h1 className="text-4xl my-5 font-Oswald text-center text-shadow-lg text-shadow-purple-600 md:text-6xl">Quem sou ?</h1>
                            <button className="bg-indigo-600 w-20 animate-pulse p-2 rounded-sm font-caacupe cursor-pointer hover:bg-indigo-800 lg:text-xl lg:w-25">Saiba mais</button>
                        </div>
                        <img src="/imgS2.png" className="w-70" alt="" />
                    </div>
                    <div className={`slide3 h-full w-screen flex flex-col items-center md:flex-row md:justify-around`}>
                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl my-5 font-Oswald text-center text-shadow-lg text-shadow-purple-600 md:text-6xl">Se interessou ?</h1>
                            <button className="bg-indigo-600 animate-pulse  p-2 rounded-sm font-caacupe cursor-pointer hover:bg-indigo-800 lg:text-xl">Entre em contato</button>
                        </div>
                        <img src="/imgS3.png" className="w-70" alt="" />
                        
                    </div>
                    
                </div>
                
            </div>
             <div className="flex w-18 items-center justify-between mt-[-30] mx-auto">
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===0?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set1() }></button>
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===100?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set2()}></button>
                <button className={`w-5 h-5 bg-${SlideCtx?.slider[0].pos===200?'indigo-500':'transparent'} border rounded-full hover:bg-indigo-500 cursor-pointer`} onClick={() => SlideCtx?.Set3()}></button>
            </div>
            
        </>
        


    )

}