/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei'
import React, { ReactNode, useLayoutEffect, useRef } from 'react'

export default function Circles({ children }: { children: ReactNode[] }) {
  const group = useRef() as any
  const { nodes, animations } = useGLTF('/models/circles.glb') as any
  const { actions } = useAnimations(animations, group)

  useLayoutEffect(() => {
    actions?.PlaneAction?.play()
  }, [actions])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
        >
          {children}
        </mesh>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          material={nodes.Plane.material}
          position={[0, 0, 1]}
        >
          <mesh
            name="GN_Instance"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance.geometry}
            material={nodes.GN_Instance.material}
            position={[1, 0, 0]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_1"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_1.geometry}
            material={nodes.GN_Instance_1.material}
            position={[0.707, 0, -0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_2"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_2.geometry}
            material={nodes.GN_Instance_2.material}
            position={[0, 0, -1]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_3"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_3.geometry}
            material={nodes.GN_Instance_3.material}
            position={[-0.707, 0, -0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_4"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_4.geometry}
            material={nodes.GN_Instance_4.material}
            position={[-1, 0, 0]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_5"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_5.geometry}
            material={nodes.GN_Instance_5.material}
            position={[-0.707, 0, 0.707]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_6"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_6.geometry}
            material={nodes.GN_Instance_6.material}
            position={[0, 0, 1]}
          >
            {children}
          </mesh>
          <mesh
            name="GN_Instance_7"
            castShadow
            receiveShadow
            geometry={nodes.GN_Instance_7.geometry}
            material={nodes.GN_Instance_7.material}
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
