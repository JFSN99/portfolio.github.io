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
                                <h1 className="pl-2 text-3xl animate-pulse">Sobre Mim</h1>
                                <button className="bg-white px-3 font-bold cursor-pointer text-indigo-600 rounded-sm hover:opacity-60" onClick={IntCtx?.handleInt}>X</button>
                            </div>
                            <div className="grid text-md *:p-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl: px-2 gap-2 mt-5">
                                <div className="bg-linear-to-r **:text-sm from-sky-600 to-indigo-600 *:text-lg text-center border grid grid-cols-2 rounded">
                                   <div>Nome:</div>
                                   <div>Juan Felipe</div>
                                </div>
                                <div className="bg-linear-to-r **:text-sm from-sky-600 to-indigo-600 grid-cols-2 text-center border grid grid-cols-2 rounded">
                                   
                                   <div>Formação 1:</div>
                                   <div>Eng. Elétrica</div>
                                   <div>Instituição:</div>
                                   <div> UFRPE</div>
                                   <div>Status:</div>
                                   <div>Concluída</div>
                                                                    
                                </div>
                                <div className="bg-linear-to-r **:text-sm grid grid-cols-2 from-sky-600 to-indigo-600 text-center border rounded">
                                    <div>Formação 2:</div>
                                    <div>ADS</div>
                                    <div>Instituição:</div>
                                    <div> Estácio</div>
                                    <div>Status:</div>
                                    <div className="flex items-center justify-center">
                                        <div className="mr-1">Em andamento</div>
                                        <div className="border-3 border-t-transparent border-l-transparent animate-spin border-purple-400 w-4 h-4 rounded-full"></div>
                                    </div>
                                    <div>
                                        Previsão: 
                                    </div>
                                    <div> 12/2028</div>
            
                                </div>
                                <div className="grid **:text-sm grid-cols-2 bg-linear-to-r from-sky-600 to-indigo-600  text-center border rounded">
                                    <div>Experiência 1:</div>
                                    <div> Stellantis</div>
                                    <div> Cargo:</div>
                                    <div>Estagiário</div>
                                    <div> Duração:</div>
                                    <div> 1 ano</div>
                                </div>
                                <div className="grid  **:text-sm grid-cols-2 bg-linear-to-r from-sky-600 to-indigo-600  text-center border rounded">
                                    <div>Experiência 2:</div>
                                    <div> Stellantis</div>
                                    <div> Cargo:</div>
                                    <div>Trainee</div>
                                    <div> Duração:</div>
                                    <div> 1 ano e 8 meses</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                }
            </div>
                
           
        </>
     

        
        
       
    )
}