// import GeoCube from '~/components/geocube/geocube'
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useControls } from 'leva'
import { Suspense, useLayoutEffect } from 'react'
import { isMobile } from 'react-device-detect'

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

  const { camera } = useThree()

  useLayoutEffect(() => {
    if (camera) {
      const tl = gsap.timeline()
      tl.to(camera, {
        duration: 1.5,
        zoom: isMobile ? 50 : 100,
        delay: 4,
        ease: 'expo.inOut',
        onUpdate: () => {
          camera.updateProjectionMatrix()
        }
      })

      tl.to(
        camera.position,
        {
          x: 25,
          y: -15,
          z: 50,
          duration: 1.5,
          ease: 'expo.inOut',
          onUpdate: () => {
            camera.updateProjectionMatrix()
          }
        },
        '<'
      )
      tl.play()
    }
  }, [camera])

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
    <Suspense
      fallback={
        <Html center occlude zIndexRange={[2, 0]} style={{ zIndex: 0 }}>
          Loading model
        </Html>
      }
    >
      <Model>
        <Matcap defaultMatcap={presetMatcap} />
      </Model>
    </Suspense>
  )
}
