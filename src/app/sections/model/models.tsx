// import GeoCube from '~/components/geocube/geocube'
import { useControls } from 'leva'

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

  const Model = modelComponents[model.model]

  return (
    <Model>
      <Matcap />
    </Model>
  )
}
