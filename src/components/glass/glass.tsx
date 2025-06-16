/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { isMobile } from 'react-device-detect'

import useMatcaps from '~/hooks/use-matcaps'

export default function Glass(props) {
  const { nodes } = useGLTF('/models/glass.glb') as any
  const { camera } = useThree()

  const matcap = useMatcaps({
    name: 'matcap',
    defaultMatcap: `matcap_16`
  }) as any

  useLayoutEffect(() => {
    if (camera) {
      gsap.to(camera, {
        duration: 1.5,
        zoom: isMobile ? 50 : 100,
        delay: 1,
        ease: 'expo.inOut',
        onUpdate: () => {
          camera.updateProjectionMatrix()
        }
      })
    }
  }, [camera])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outside.geometry}
        position={[-3.24, 1.55, 0.073]}
        scale={0.01}
      >
        <meshMatcapMaterial matcap={matcap.matcap} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/glass.glb')
