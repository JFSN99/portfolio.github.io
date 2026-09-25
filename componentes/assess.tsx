
type Props = {

    nota:number
}

const HandleNota = (nota:number) => {
    switch(nota){
        case 1:
            return(
                <div className="flex gap-1 justify-center items-center">
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                </div>
            )
        break;
        case 2:
            return(
                <div className="flex gap-1">
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                </div>
            )
        break;
        case 3:
            return(
                <div className="flex gap-1">
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                </div>
            )
        break;
        case 4:
            return(
                <div className="flex gap-1">
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png" alt="" />
                </div>
            )
        break;
        case 5:
            return(
                <div className="flex gap-1">
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                    <img className="w-8 h-8"  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="" />
                </div>
            )
        break;
    }
}

export const Nota = ({nota}:Props) => {
    

    return(
        <>
            {HandleNota(nota)}
        </>
    )
}