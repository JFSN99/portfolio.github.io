'use client'

import { useReducer, createContext, ReactNode } from "react";
import { slide, PostReducer } from "@/reducers/slide_reducer";

type PostF = {
    slider:slide[],
    NextS:() => void,
    PrevS:() => void,
    Set1:() => void,
    Set2:() => void,
    Set3:() => void
}

export const SlideContext = createContext<PostF|null>(null);

export const SlideC = ({children}:{children:ReactNode}) => {

    const [SlidePos,dispatch] = useReducer(PostReducer, [{pos:0}])

    const NextS = () => {
        dispatch({type:'Pass'})
    }
    const PrevS = () => {
        dispatch({type:'Prev'})
    }
    const Set1 = () => {
        dispatch({type:'SetUm'})
    }
    const Set2 = () => {
        dispatch({type:'SetDois'})
    }
    const Set3 = () => {
        dispatch({type:'SetTres'})
    }

    return(
        <SlideContext.Provider value={{slider:SlidePos, NextS:NextS, PrevS:PrevS, Set1:Set1, Set2:Set2, Set3:Set3}}>
            {children}
        </SlideContext.Provider>
    )
}