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
                            <h1 className="text-4xl animate-pulse">Sobre Mim</h1>
                            <div className="flex justify-between items-center">
                                <ul className="mt-5">
                                    <li>Nome: Juan</li>
                                    <li>Formação 1: Engenharia elétrica - UFRPE (concluída)</li>
                                    <li>Formação 2: ADS - Estácio (Em andamento)</li>
                                    <li>Experiência 1: Estagiário Stellantis - 1 ano (06/2023 à 06/2024)</li>
                                    <li>Experiência 2: Trainee Stellantis - 1 ano (09/2024 à 04/2026) {IntCtx?.sessoes[0].Int}</li>
                                </ul>
                                <img src="/microchip.png" className="w-30 h-30" alt="" />
                            </div>
                        
                        </div>
                    </div>
                }
            </div>
                
           
        </>
     

        
        
       
    )
}