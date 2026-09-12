'use client'

import { useReducer, createContext, ReactNode } from "react";
import { sessoes, SessoesRed } from "@/reducers/sessoes_reducer";

type SessionCtx = {

    sessoes:sessoes[],
    handleInt:() => void;
    handleForm:() => void;
    handleCursos:() => void;
    handlehab:() => void;
    handleproj:() => void;

}

export const SessaoConst = createContext<SessionCtx|null>(null);

export const SessaoContexto = ({children}:{children:ReactNode}) => {

    const [Ses, dispatch] = useReducer(SessoesRed, [{Int:false, formacao:false, cursos:false, hab:false ,proj:false}]);

    const HandleInt = () => {
        dispatch({type:'SetInt'})
    }

    const HandleForm = () => {
        dispatch({type:'SetForm'})
    }

    const HandleCursos = () => {
        dispatch({type:'SetCursos'})
    }

    const Handlehab = () => {
        dispatch({type:'SetHab'})
    }

    const Handleproj = () => {
        dispatch({type:'SetProj'})
    }

    return(
        <SessaoConst.Provider value={{sessoes:Ses, handleInt:HandleInt, handleForm:HandleForm, handleCursos:HandleCursos, handlehab:Handlehab, handleproj:Handleproj}}>
            {children}
        </SessaoConst.Provider>
    )
}