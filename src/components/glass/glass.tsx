/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { isMobile } from 'react-device-detect'

export default function Glass({ children }: { children?: React.ReactNode }) {
  const { nodes } = useGLTF('/models/glass.glb') as any
  const { camera } = useThree()

  useLayoutEffect(() => {
    if (camera) {
      gsap.to(camera, {
        duration: 1.5,
        zoom: isMobile ? 50 : 100,
        delay: 5,
        ease: 'expo.inOut',
        onUpdate: () => {
          camera.updateProjectionMatrix()
        }
      })
    }
  }, [camera])

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Outside.geometry}
      position={[-3.24, 1.55, 0.073]}
      scale={0.01}
    >
      {children}
    </mesh>
  )
}

useGLTF.preload('/models/glass.glb')
