/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export default function Glass({ children }: { children?: React.ReactNode }) {
  const { nodes } = useGLTF('/models/glass.glb') as any

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
