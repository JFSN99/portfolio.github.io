'use client'
import { useContext } from "react";
import { SessaoConst } from "@/contexts/SessoesCtx";
import { CursosCtx } from "@/contexts/Cursos";

export const Cursos = () => {

    const SessCtx = useContext(SessaoConst);
    const CrsCtx = useContext(CursosCtx);
    return(

        <div className="mt-3 p-2">
            {SessCtx?.sessoes[0].cursos && 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 rounded-sm shadow-md shadow-indigo-500 bg-purple-600 gap-1 md:gap-10 p-2">
                    {CrsCtx?.map((item) => {
                        return(
                            <div className="w-76 h-55 mx-auto p-2 border border-white" key={item.id}>
                                <div className="flex flex-col p-2 items-center justify-center bg-black mx-auto absolute w-72 h-51 opacity-0 hover:opacity-70">
                                    <strong className="text-xl text-center">Curso: {item.nome}</strong>
                                    <strong className="text-xl text-center">Duração: {item.duracao} Horas</strong>
                                </div>
                                <img src={`${item.src}`} className="w-full cover mx-auto" alt=""></img>
                            </div>)
                    })}
                </div>
            }
        </div>

    )
}