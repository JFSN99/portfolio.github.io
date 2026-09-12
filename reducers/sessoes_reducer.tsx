export type sessoes = {
    Int:boolean,
    formacao:boolean,
    cursos:boolean,
    hab:boolean,
    proj:boolean
}

type SetInt = {
    type:'SetInt'
}

type SetForm = {
    type:'SetForm'
}
type SetCursos = {
    type:'SetCursos'
}
type Sethab = {
    type:'SetHab'
}

type Setproj = {
    type:'SetProj'
}

type AllSets = SetInt|SetForm|SetCursos|Sethab|Setproj

export const SessoesRed = (item:sessoes[],actions:AllSets) => {

    switch(actions.type){
        case "SetInt":
            return([...item].map((item) => {

                if(item.Int === false){
                    item.Int = true;
                }else{
                    item.Int = false;
                }
                console.log(item.Int)
               return item
            }))
        case "SetForm":
            return(item.map((item) => {
               item.formacao = !item.formacao
               return item
            }))
        case "SetCursos":
            return(item.map((item) => {
               item.cursos = !item.cursos
               return item
            }))
        case "SetHab":
            return(item.map((item) => {
               item.hab = !item.hab
               return item
            }))
        case "SetProj":
            return(item.map((item) => {
               item.proj = !item.proj
               return item
            }))
    }
}