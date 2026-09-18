'use client'
import { useContext, useState } from "react";
import { SessaoConst } from "@/contexts/SessoesCtx";
import { CursosCtx } from "@/contexts/Cursos";

export const Cursos = () => {

    const SessCtx = useContext(SessaoConst);
    const CrsCtx = useContext(CursosCtx);
    const [zoom, setZoom] = useState(false);
    const [imgAmp, setImgAmp] = useState('');

    const HandleImgZoom = (src:string) => {

        
        setZoom(true);
        setImgAmp(src);

    }
    return(

        <div className="mt-3">
            {SessCtx?.sessoes[0].cursos &&
                <>
                    {zoom &&
                        <div className="flex flex-col p-2 absolute bg-black h-screen">
                            <button className="mb-4 border w-6 h-6 border-white flex self-end items-center justify-center rounded-sm right-0 p-1" onClick={() => setZoom(false)}>X</button>
                            <div className="">
                                {
                                    <img src={`${imgAmp}`} alt="" />
                                }
                            </div>
                        </div>  
                    }
                    
                    <div className="flex justify-between items-center px-2 pt-2 mb-5">
                        <div className="flex flex-col flex-start justify-center">
                            <h1 className="text-2xl rounded-full">Cursos</h1>
                            <div className="w-18 h-1 bg-linear-to-r from-cyan-500 to-green-500 rounded-full"></div>
                        </div>
                        <button className=" w-7 h-7 font-bold cursor-pointer text-white border-white border rounded-sm hover:opacity-60" onClick={() => SessCtx.handleCursos()}>X</button>
                    </div>
                    <div className="p-2 h-100 overflow-y-scroll">
                        <div className="h-auto">
                            
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-10 p-2">
                                {CrsCtx?.map((item) => {
                                    return(
                                        <div className="w-68 h-55 md:w-85 md:h-59 lg:w-76 lg:h-55 xl:w-80 xl:h-59 2xl:w-118 2xl:h-97 mx-auto p-2 border border-white flex items-center justify-center" key={item.id}>
                                            <div className="flex flex-col p-2 items-center justify-center bg-black mx-auto absolute w-66 h-47 opacity-0 hover:opacity-70">
                                                <strong className="text-xl text-center">Curso: {item.nome}</strong>
                                                <strong className="text-xl text-center">Duração: {item.duracao} Horas</strong>
                                            </div>
                                            <img src={`${item.src}`} onClick={() => HandleImgZoom(item.src)} className="w-full h-full cover mx-auto" alt=""></img>
                                        </div>)
                                })}
                            </div>
                        </div>
                        
                    </div>
                </>
                
            }
        </div>

    )
}