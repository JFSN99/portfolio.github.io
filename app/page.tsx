import { HeaderT }  from '@/componentes/header'
import { Slider } from '@/componentes/slider'
import { SlideC } from '@/contexts/slideCtx'

const page = () => {
  return (
   <div>
    <SlideC>

      <HeaderT></HeaderT>
      <Slider></Slider>

    </SlideC>  
   </div>
  )
}

export default page