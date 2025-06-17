/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { LoopRepeat } from 'three'

export default function Dynamic({ children }: { children?: React.ReactNode }) {
  const group = useRef() as any
  const { nodes, animations } = useGLTF('/models/dynamipaint.glb') as any
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((key) => {
        const action = actions[key]
        if (action) {
          action.setLoop(LoopRepeat, Infinity)
          action.play()
        }
      })
    }
  }, [actions])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
        >
          {children}
        </mesh>
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={nodes.Icosphere.material}
          position={[0, 0, 1]}
        >
          {children}
        </mesh>
        <group name="BézierCircle" />
        <mesh
          name="Icosphere001"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={nodes.Icosphere001.material}
          position={[0, 0, 1.946]}
        >
          {children}
        </mesh>
        <group name="BézierCircle001" scale={1.946} />
        <mesh
          name="Icosphere002"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={nodes.Icosphere002.material}
          position={[0, 0, -2.898]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          {children}
        </mesh>
        <group
          name="BézierCircle002"
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={2.898}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/dynamipaint.glb')
