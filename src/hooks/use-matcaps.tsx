/* eslint-disable no-inner-declarations */
import { useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { useLayoutEffect } from 'react'
import { MeshMatcapMaterial } from 'three'

import useShortcuts from './use-shortcuts'

const options = Array.from(
  { length: 61 },
  (_, i) => 'matcap_' + (i + 1) + '.png'
).reduce((acc, curr) => {
  acc[curr.replace('.png', '')] = curr
  return acc
}, {})

export default function useMatcaps({
  name,
  defaultMatcap = 'matcap_16'
}: {
  name?: string
  defaultMatcap?: string
}) {
  let matcapNumber = 16

  if (typeof document !== 'undefined') {
    const [matcap, set] = useControls(() => ({
      matcap: {
        name,
        value: defaultMatcap + '.png',
        options
      }
    })) as any

    useLayoutEffect(() => {
      set({ matcap: `${defaultMatcap}.png` })
    }, [])

    useShortcuts({
      ArrowRight: {
        key: 'ArrowRight',
        action: () => {
          matcapNumber++
          if (matcapNumber >= 61) {
            matcapNumber = 1
          }
          set({ matcap: `matcap_${matcapNumber}.png` })
        }
      },
      ArrowLeft: {
        key: 'ArrowLeft',
        action: () => {
          matcapNumber--
          if (matcapNumber <= 0) {
            matcapNumber = 61
          }
          set({ matcap: `matcap_${matcapNumber}.png` })
        }
      }
    })

    const texture = useTexture(`/textures/matcaps/${matcap.matcap}`) as any
    return new MeshMatcapMaterial({ matcap: texture })
  }
}
