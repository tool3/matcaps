/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { button, Leva, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { ReactNode, Suspense, useRef } from 'react'

import { useDeviceDetect } from '~/hooks/use-device-detect'
import useShortcuts from '~/hooks/use-shortcuts'

import Effects from './effects'

export default function CanvasWithModel({
  style,
  children
}: {
  style?: any
  children: ReactNode
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const target = useRef() as any
  const { isMobile, isTablet, isAndroid } = useDeviceDetect()
  const zoom = isMobile && !isTablet ? 13 : 30

  useShortcuts({
    Digit0: {
      key: 'Digit0',
      action: () => {
        target.current.reset()
      }
    }
  })

  const { fps, background, rotate } = useControls(
    {
      fps: false,
      rotate: false,
      background: {
        value: isAndroid ? '#000000' : '#000000',
        onEditEnd: (value) => {
          const meta = document.querySelector('meta[name="theme-color"]')
          if (meta) {
            meta.setAttribute('content', value)
          }
          return value
        }
      }
    },
    { order: -1 }
  )

  useControls(
    {
      ['reset camera']: button(() => {
        target.current.reset()
      })
    },
    { order: -1 }
  )

  return (
    <>
      <Leva collapsed />
      {fps ? <Stats /> : null}
      <Canvas
        ref={canvasRef}
        dpr={[1, 2]}
        orthographic
        camera={{
          frustumCulled: true,
          fov: 70,
          position: [0, 0, 50],
          zoom
        }}
        gl={{ premultipliedAlpha: false, powerPreference: 'high-performance' }}
        style={style}
      >
        <color attach="background" args={[background]} />
        {fps ? <Perf position="bottom-left" logsPerSecond={1} /> : null}

        <Suspense fallback={null}>{children}</Suspense>

        <Effects />

        <OrbitControls
          autoRotate={rotate}
          autoRotateSpeed={-1}
          ref={target}
          makeDefault
          minZoom={10}
          maxZoom={300}
        />
      </Canvas>
    </>
  )
}
