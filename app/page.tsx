import { HeaderT }  from '@/componentes/header'
import { Slider } from '@/componentes/slider'
import { SlideC } from '@/contexts/slideCtx'
import { SessaoContexto } from '@/contexts/SessoesCtx'
import { Int } from '@/componentes/Int'
import { Cursos } from '@/componentes/cursos'
import { CrsCtx } from '@/contexts/Cursos'
import { Skills } from '@/componentes/skills'
import { SkCtx } from '@/contexts/habCtx'

const page = () => {
  return (
   <div>
    
      <SessaoContexto>
        
         <HeaderT></HeaderT>
          <SlideC>
            <Slider></Slider>
          </SlideC>
          <Int></Int>
          <CrsCtx>
              <Cursos></Cursos>
          </CrsCtx>
          <SkCtx>
              <Skills></Skills>
          </SkCtx>
          
          
      </SessaoContexto>
        
   </div>
  )
}

export default page