/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'

export default function Party({ children }: { children?: React.ReactNode }) {
  const { nodes } = useGLTF('/models/3_d_paths_handwritten.glb') as any
  return (
    <group scale={0.01}>
      <group position={[35.227, 20.265, -8.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[44.093, 108.573, 6.123]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape.geometry}
          material={nodes.Shape.material}
          position={[-314.912, 59.21, 9.27]}
        >
          {children}
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ellipse.geometry}
        material={nodes.Ellipse.material}
        position={[-165.457, 54.996, 62]}
      >
        {children}
      </mesh>
      <group position={[28.238, 26.777, -108.786]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape_6.geometry}
          material={nodes.Shape_6.material}
          position={[-738.167, -236.79, -212.98]}
          rotation={[0, 0, -1.65]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape_5.geometry}
          material={nodes.Shape_5.material}
          position={[75.34, 707.855, 26.545]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape_4.geometry}
          material={nodes.Shape_4.material}
          position={[-773.308, 191.178, 159.737]}
          rotation={[0, 0, -1.746]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Triangle.geometry}
          material={nodes.Triangle.material}
          position={[440.516, 206.101, -142.278]}
          rotation={[-0.339, -0.569, 0.02]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse_4.geometry}
          material={nodes.Ellipse_4.material}
          position={[379.389, -340.008, -23.642]}
          rotation={[-0.205, 0.324, -0.18]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse_3.geometry}
          material={nodes.Ellipse_3.material}
          position={[-513.565, 338.503, -65.249]}
          rotation={[0.775, -0.185, -0.576]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
          position={[-510.235, 257.902, 79.244]}
          rotation={[2.199, 0.346, 0.557]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[167.946, 335.141, -82.741]}
          rotation={[2.512, 0.405, -0.608]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={nodes.Sphere_3.material}
          position={[580.653, 264.357, 21.684]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_6.geometry}
          material={nodes.Sphere_6.material}
          position={[-198.391, -340.194, -99.173]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_4.geometry}
          material={nodes.Sphere_4.material}
          position={[-444.053, -304.192, -10.074]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={nodes.Sphere_2.material}
          position={[-466.306, -50.096, 108.009]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone.geometry}
          material={nodes.Cone.material}
          position={[-637.475, -125.285, 76.89]}
          rotation={[-0.159, -0.538, -1.473]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Helix.geometry}
          material={nodes.Helix.material}
          position={[-183.307, -229.06, -2.721]}
          rotation={[-0.449, 0.573, -1.833]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus_2.geometry}
          material={nodes.Torus_2.material}
          position={[566.153, -225.613, 24.06]}
          rotation={[-2.388, 0.156, -1.853]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus_3.geometry}
          material={nodes.Torus_3.material}
          position={[-517.343, -257.555, 37.909]}
          rotation={[-0.862, -0.35, 0.385]}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={nodes.Torus.material}
          position={[635.24, 193.669, -47.829]}
          rotation={[-0.806, -0.472, -0.442]}
        >
          {children}
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/3_d_paths_handwritten.glb')
