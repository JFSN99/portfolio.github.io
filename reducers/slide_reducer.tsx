export type slide = {
    pos:number
}

type NextPost = {
    type:'Pass'
}

type PrevPost = {
    type:'Prev'
}

type SetUm = {
    type:'SetUm'
}

type SetDois = {
    type:'SetDois'
}

type SetTres = {
    type:'SetTres'
}

type AllActions = NextPost|PrevPost|SetUm|SetDois|SetTres;

export const PostReducer = (item:slide[], action:AllActions) => {

    switch(action.type){
        case "Pass":
            const I = item;
            return(I.map((item) => {
                if(item.pos < 200){
                    item.pos += 100
                }else{
                    item.pos = 0;
                }
                return item
            }))
        case "Prev":
            const It = item;
            return(It.map((item) => {
                if(item.pos > 0){
                    item.pos -= 100
                }else{
                    item.pos = 200;
                }
                return item
            }))
        case "SetUm":
            const Ite = item;
            return(Ite.map((item) => {
                item.pos = 0
                return item
            }))
        case "SetDois":
            const Item = item;
            return(Item.map((item) => {
                item.pos = 100
                return item
            }))
        case "SetTres":
            const Items = item;
            return(Items.map((item) => {
                item.pos = 200
                return item
            }))
    }

}