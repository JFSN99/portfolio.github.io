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
        {title:'TANSTACK', img:'https://images.seeklogo.com/logo-png/68/1/tanstack-icon-logo-png_seeklogo-683903.png?v=1976961079690852136',id:7, prof:4},
        {title:'Git', img:'data:image/png;base64,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',id:8, prof:3},
        {title:'Github', img:'data:image/png;base64,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',id:9, prof:3},
    ]

    return(
        <HabCtx.Provider value={{hab:hab}}>
            {children}
        </HabCtx.Provider>
    )
}