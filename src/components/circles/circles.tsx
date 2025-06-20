/* eslint-disable react/no-unknown-property */

import { useAnimations, useGLTF } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react'

export default function Circles({ children }: { children?: React.ReactNode }) {
  const group = useRef() as any
  const { nodes, animations } = useGLTF('/models/circles.glb') as any
  const { actions } = useAnimations(animations, group)

  useLayoutEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((key) => {
        const action = actions[key]
        if (action) {
          action.play()
        }
      })
    }
  }, [actions])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
        >
          {children}
        </mesh>
        <mesh name="Plane" castShadow receiveShadow position={[0, 0, 1]}>
          <mesh
            name="GN_Instance"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance.geometry}
            position={[1, 0, 0]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_1"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_1.geometry}
            position={[0.707, 0, -0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_2"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_2.geometry}
            position={[0, 0, -1]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_3"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_3.geometry}
            position={[-0.707, 0, -0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_4"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_4.geometry}
            position={[-1, 0, 0]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_5"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_5.geometry}
            position={[-0.707, 0, 0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_6"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_6.geometry}
            position={[0, 0, 1]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_7"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_7.geometry}
            position={[0.707, 0, 0.707]}
          >
            {children}
          </mesh>
        </mesh>
        <group name="BézierCircle" />
        <group name="Empty" rotation={[Math.PI / 2, 0, -Math.PI / 8]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/circles.glb')
