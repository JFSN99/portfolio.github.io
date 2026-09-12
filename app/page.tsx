import { HeaderT }  from '@/componentes/header'
import { Slider } from '@/componentes/slider'
import { SlideC } from '@/contexts/slideCtx'
import { SessaoContexto } from '@/contexts/SessoesCtx'
import { Int } from '@/componentes/Int'

const page = () => {
  return (
   <div>
    
      <SessaoContexto>
         <HeaderT></HeaderT>
          <SlideC>
            <Slider></Slider>
          </SlideC>
          <Int></Int>
      </SessaoContexto>
        
   </div>
  )
}

export default page