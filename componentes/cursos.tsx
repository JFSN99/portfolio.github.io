'use client'
import { useContext, useState } from "react";
import { SessaoConst } from "@/contexts/SessoesCtx";
import { CursosCtx } from "@/contexts/Cursos";
import { HeaderSess } from "./sessHeader";

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

        <div className="">
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
                            
                            <div className="bg-black">
                                <HeaderSess title='Cursos' Func={SessCtx?.handleCursos}>
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
                                </HeaderSess>
                                
                                
                            </div>

                        </>
                    }
                    
                </>
                
            }
        </div>

    )
}