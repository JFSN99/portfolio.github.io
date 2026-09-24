

import { ReactNode } from "react"

type Props = {
    title:string,
    Func:() => void,
    children:ReactNode
}    

export const HeaderSess = ({title, Func, children}:Props) => {
    return(
        <>
            <div className="flex text justify-between items-center py-8 px-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl">{title}</h1>
                    <div className="w-40 h-2 bg-linear-to-r rounded-full from-amber-500 to-red-500"></div>
                </div>
                <button className="w-8 h-8 rounded-sm p-1 border border-white hover:opacity-55 cursor-pointer" onClick={Func}>X</button>
            </div>
            <div className="px-8">
                {children}
            </div>
        </>
       
    )
   
}