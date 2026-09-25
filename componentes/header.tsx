import { Menu } from '@/componentes/nav'

export const HeaderT = () => {
    return (
        <div className="bg-black p-3 flex justify-between items-center">
            <img src="/portfolio.github.io/logo2.png" alt="" className="w-15 h-15" />
            <Menu></Menu>
        </div>
    )
}