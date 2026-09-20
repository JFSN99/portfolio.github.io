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
                        <div className="flex flex-col p-2 absolute bg-black w-full h-full">
                            <button className="mb-4 border w-9 h-9 border-white flex self-end items-center justify-center rounded-sm right-0 p-1 cursor-pointer hover:opacity-50" onClick={() => setZoom(false)}>X</button>
                            <div className="mx-auto my-auto">
                                {
                                    <img src={`${imgAmp}`} className="max-w-300 max-h-150" alt="" />
                                }
                            </div>
                        </div>  
                    }
                    {zoom === false &&
                        <>
                            <div className="flex justify-between items-center px-6 pt-2 mb-5">
                                <div className="flex flex-col flex-start justify-center">
                                    <h1 className="text-2xl rounded-full lg:text-4xl 2xl:text-6xl">Cursos</h1>
                                    <div className="w-18 lg:w-28 lg:h-2 2xl:h-3 2xl:w-48 h-1 bg-linear-to-r from-cyan-500 to-green-500 rounded-full"></div>
                                </div>
                                <button className=" w-9 h-9 font-bold cursor-pointer text-white border-white border rounded-sm hover:opacity-60" onClick={() => SessCtx.handleCursos()}>X</button>
                            </div>
                            <div className="px-6 2xl:p-6">
                                <div className="h-auto">
                                    
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-10">
                                        {CrsCtx?.map((item) => {
                                            return(
                                                <div onClick={() => HandleImgZoom(item.src)} className="w-68 h-55 md:w-85 md:h-59 lg:w-76 lg:h-55 xl:w-80 xl:h-59 2xl:w-118 2xl:h-97 mx-auto p-2 border border-white flex items-center justify-center" key={item.id}>
                                                    <div className="flex flex-col items-center justify-center bg-black mx-auto absolute w-64 h-51 md:w-81 md:h-55 lg:w-72 lg:h-51 xl:w-76 xl:h-55 2xl:w-114 2xl:h-94 opacity-0 hover:opacity-70">
                                                        <strong className="text-xl text-center">Curso: {item.nome}</strong>
                                                        <strong className="text-xl text-center">Duração: {item.duracao} Horas</strong>
                                                    </div>
                                                    <img src={`${item.src}`} className="w-full h-full cover mx-auto" alt=""></img>
                                                </div>)
                                        })}
                                    </div>
                                </div>
                                
                            </div>

                        </>
                    }
                    
                </>
                
            }
        </div>

    )
}