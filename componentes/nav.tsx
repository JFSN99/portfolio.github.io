'use client'
import { useState } from "react"



export const Menu = () => {

    const [hideMenu, setHideMenu ] = useState(true) 

    const HandleMenu = () => {

        setHideMenu(!hideMenu)
        
    }

    return (
        <div className="flex flex-col">
            <div onClick={HandleMenu} className="p-2 rounded-full flex flex-col justify-between w-9 h-9 cursor-pointer hover:bg-gray-800">
                <div className="w-full h-0.5 bg-indigo-600"></div>
                <div className="w-full h-0.5 bg-indigo-600"></div>
                <div className="w-full h-0.5 bg-indigo-600"></div>
            </div>
            <nav className={`${hideMenu?'hidden':'flex'} flex-col font-Oswald bg-black absolute mt-15 w-30 right-0`}>
                <div className="p-2 text-center transition-all hover:bg-indigo-600 hover:text-white text-indigo-600 cursor-pointer">Quem sou ?</div>
                <div className="p-2 text-center text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white cursor-pointer" >Formação</div>
                <div className="p-2 text-center text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white cursor-pointer">Cursos</div>
                <div className="p-2 text-center text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white cursor-pointer">Habilidades</div>
                <div className="p-2 text-center text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white cursor-pointer">Projetos</div>
                <div className="p-2 text-center text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white cursor-pointer">Contatos</div>
            </nav>

        </div>
        
    )
}