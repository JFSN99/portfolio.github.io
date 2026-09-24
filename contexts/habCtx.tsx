'use client'

import { createContext, ReactNode, useContext } from "react"


type Skill = {
    
    title:string,
    img:string,
    id:number,
    prof:number
    
}

type skillsCtx = {
    hab:Skill[]
}

export const HabCtx = createContext<skillsCtx|null>(null);

export const SkCtx = ({children}:{children:ReactNode}) => {
 
    const hab = [
        {title:'HTML', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png',id:1, prof:5},
        {title:'CSS', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png',id:2, prof:5},
        {title:'JAVASCRIPT', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png',id:3, prof:5},
        {title:'TYPESCRIPT', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png',id:4, prof:4},
        {title:'TAILWIND', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png',id:5, prof:4},
        {title:'REACT', img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png',id:6, prof:4},
        {title:'TANSTACK', img:'https://images.seeklogo.com/logo-png/68/1/tanstack-icon-logo-png_seeklogo-683903.png?v=1976961079690852136',id:7, prof:4}
    ]

    return(
        <HabCtx.Provider value={{hab:hab}}>
            {children}
        </HabCtx.Provider>
    )
}