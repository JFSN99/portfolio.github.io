'use client'
import { Children, createContext, ReactNode } from "react";

type Cert = {
    id:number,
    src:string,
    nome:string,
    duracao:number
}



export const CursosCtx = createContext<Cert[]|null>(null)

export const CrsCtx = ({children}:{children:ReactNode}) => {

    const Certificados = [
        {
        id:1,    
        src:'/b7_burger.png',
        nome:'B7 burger',
        duracao:3   
        },
        {
        id:2,
        src:'/fund_html_css.png',
        nome:'Fundamentos de HTML e CSS',
        duracao:12
        },
        {
        id:3,
        src:'/Fundamentos_git.png',
        nome:'Fundamentos de Git',
        duracao:3
        },
        {
        id:4,    
        src:'/fundamentos_java.png',
        nome:'Fundamentos de Javascript',
        duracao:12,
        },
        {
        id:5,
        src:'/Fundamentos_reactJs.png',
        nome:'Fundamentos de React.Js',
        duracao:12
        },
        {
        id:6,    
        src:'/Fundamentos_tailwind.png',
        nome:'Fundamentos de Tailwind',
        duracao:3
        },
        {
        id:7,
        src:'/GitHub_na_pratica.png',
        nome:'GitHub na Prática',
        duracao:5
        },
        {
        id:8,
        src:'/html_css_avan.png',
        nome:'HTML/CSS Avançados',
        duracao:24},
        {
        id:9,
        src:'/java_avanc.png',
        nome:'Javascript Avançado',
        duracao:17
        }, 
        {
        id:10,
        src:'/projeto_starbucks.png',
        nome:'Projeto Starbucks',
        duracao:3},
        {
        id:11,    
        src:'/react_int.png',
        nome:'React Intermediário',
        duracao:12
        },
        {
        id:12,    
        src:'/Responsividade_tailwind.png',
        nome:'Responsividade com Tailwind',
        duracao:17},
        {
        id:13,
        src:'/Typescript_do_zero.png',
        nome:'TypeScript do zero',
        duracao:5},
    ]

    return(
        <CursosCtx.Provider value={Certificados}>
            {children}   
        </CursosCtx.Provider>
    )
} 