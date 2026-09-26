'use client'

import { HeaderSess } from "./sessHeader"
import { useContext } from "react"
import { SessaoConst } from "@/contexts/SessoesCtx"
import { HabCtx } from "@/contexts/habCtx"
import { Nota } from "./assess"

export const Skills = () => {

    const Ctx = useContext(HabCtx)

    const SessCtx = useContext(SessaoConst)
    
    return(
        <div>
            {SessCtx?.sessoes[0].hab && 
                <HeaderSess title="Habilidades" Func={SessCtx?.handlehab}>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 px-2">
                        {Ctx?.hab.map((item) => {
                            return(
                            <div key={item.id} className="border border-white w-60 mx auto p-4 flex flex-col items-center">
                                <img src={item.img} className="w-30 h-30">

                                </img>
                                <h2 className="font-Oswald text-3xl">{item.title}</h2>
                                <div className="font-Oswald text-xl">Proficiência: {item.prof}.0/5.0</div>
                                <Nota nota={item.prof}></Nota>
                            </div>
                            
                            )
                        })}
                    </div>
                </HeaderSess>
            }
          
        </div>
    )

}