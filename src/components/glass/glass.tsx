/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import React from 'react'
import { TextureLoader } from 'three'

export default function Glass(props) {
  const { nodes } = useGLTF('/models/glass.glb') as any

  const options = Array.from(
    { length: 61 },
    (_, i) => 'matcap_' + (i + 1) + '.png'
  ).reduce((acc, curr) => {
    acc[curr.replace('.png', '')] = curr
    return acc
  }, {})

  const matcap = useControls('Matcaps', {
    matcap: {
      value: 'matcap_16.png',
      options
    }
  })

  const [map] = useLoader(TextureLoader, [`/textures/matcaps/${matcap.matcap}`])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outside.geometry}
        material={nodes.Outside.material}
        position={[-3.24, 1.55, 0.073]}
        scale={0.01}
      >
        <meshMatcapMaterial matcap={map} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/glass.glb')
