// import GeoCube from '~/components/geocube/geocube'
import { useControls } from 'leva'

import Fabric from '~/components/fabric/fabric'
import GeoCube from '~/components/geocube/geocube'
import Glass from '~/components/glass/glass'
import Matcap from '~/components/matcap/matcap'
import Party from '~/components/party/party'

export default function Models() {
  const modelComponents = {
    Glass: Glass,
    Fabric: Fabric,
    Party: Party,
    GeoCube: GeoCube,
  }

  const model = useControls({
    model: {
      value: 'Glass',
      options: {
        geocube: 'GeoCube',
        glass: 'Glass',
        fabric: 'Fabric',
        party: 'Party'
      }
    }
  })

  const Model = modelComponents[model.model]

  return (
    <group>
      {/* <GeoCube>
        <Matcap />
      </GeoCube> */}
      {/* <Glass>
        <Matcap />
      </Glass> */}
      {/* <Fabric>
        <Matcap />
      </Fabric> */}
      <Model>
        <Matcap />
      </Model>
    </group>
  )
}
