// import GeoCube from '~/components/geocube/geocube'
import { Html } from '@react-three/drei'
import { useControls } from 'leva'
import { Suspense } from 'react'

import Circles from '~/components/circles/circles'
import Fabric from '~/components/fabric/fabric'
import GeoCube from '~/components/geocube/geocube'
import Glass from '~/components/glass/glass'
import Matcap from '~/components/matcap/matcap'
import Party from '~/components/party/party'

export default function Models() {
  const modelComponents = {
    Glass: Glass,
    Fabric: Fabric,
    Design: Party,
    GeoCube: GeoCube,
    Circles: Circles
  }

  const model = useControls({
    model: {
      value: 'Glass',
      options: {
        geocube: 'GeoCube',
        glass: 'Glass',
        fabric: 'Fabric',
        design: 'Design',
        circles: 'Circles'
      }
    }
  })

  const presets = {
    Glass: 'matcap_16',
    GeoCube: 'matcap_60',
    Circles: 'matcap_61',
    Fabric: 'matcap_18',
    Design: 'matcap_60'
  }

  const Model = modelComponents[model.model]
  const presetMatcap = presets[model.model]

  return (
    <Suspense fallback={<Html>Loading model</Html>}>
      <Model>
        <Matcap defaultMatcap={presetMatcap} />
      </Model>
    </Suspense>
  )
}
