'use client'

import { useContext } from "react";
import { SessaoConst } from "@/contexts/SessoesCtx";

export const Int = () => {

    const IntCtx = useContext(SessaoConst)

    return(

        <>
          
             <div>
                {IntCtx?.sessoes[0].Int && 
                    <div className="bg-black py-5 px-3">
                    
                        <div className="bg-linear-to-r from-indigo-600 to-purple-600  p-3 rounded-md shadow-lg shadow-blue-500/50 font-Outfit">
                            <div className="flex justify-between pr-2 bg-">
                                <h1 className="pl-2 text-4xl animate-pulse">Sobre Mim</h1>
                                <button className="bg-white px-3 font-bold cursor-pointer text-indigo-600 rounded-sm hover:opacity-60" onClick={IntCtx?.handleInt}>X</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <table className="mt-10">
                                    <tbody className="**:h-10 *:hover:bg-sky-600">
                                        <tr className="text-center">
                                            <td className="px-3 text-left">Nome</td>
                                            <td className="px-3">Juan</td>
                                            <td className="px-3 text-right"></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="px-3 text-left">Formação 1</td>
                                            <td className="px-3">Engenharia Elétrica - UFRPE</td>
                                            <td className="px-3 text-right">Concluído</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="px-3 text-left">Formação 2</td>
                                            <td className="px-3">ADS - Estácio</td>
                                            <td className="px-3 text-right">Em andamento</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="px-3 text-left">Experiência 1</td>
                                            <td className="px-3">Estagiário Stellantis</td>
                                            <td className="px-3 text-right"> 1 ano</td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="px-3 text-left">Experiência 2</td>
                                            <td className="px-3">Trainee Stellantis</td>
                                            <td className="px-3 text-right">1 ano e 8 meses</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <img src="/microchip.png" className="w-30 h-30" alt="" />
                            </div>
                        
                        </div>
                    </div>
                }
            </div>
                
           
        </>
     

        
        
       
    )
}