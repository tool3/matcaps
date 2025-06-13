import { useLoader } from '@react-three/fiber'
import {
  Bloom,
  EffectComposer,
  LUT,
  Scanline,
  Vignette
} from '@react-three/postprocessing'
import { folder, useControls } from 'leva'
import { VignetteTechnique } from 'postprocessing'
import { LUTCubeLoader } from 'three-stdlib'

import { useDeviceDetect } from '~/hooks/use-device-detect'

export default function Effects() {
  const { isAndroid } = useDeviceDetect()
  const {
    enabled,
    lut,
    lutEnabled,
    bloomEnabled,
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
    vignetteEnabled,
    vignetteStrength,
    vignetteOffset,
    scanlineEnabled,
    scanlineStrength
  } = useControls(
    'Post Processing',
    {
      enabled: true,
      LUTs: folder(
        {
          lutEnabled: !isAndroid,
          lut: {
            value: 'MANHATTAN.CUBE',
            options: {
              ARCHIVE: 'ARCHIVE.CUBE',
              ARTISTRY: 'ARTISTRY.CUBE',
              BOURBON: 'BOURBON.CUBE',
              CHEMICAL: 'CHEMICAL.CUBE',
              CHRONICLE: 'CHRONICLE.CUBE',
              CLAYTON: 'CLAYTON.CUBE',
              CONCESSION: 'CONCESSION.CUBE',
              COUNTRY: 'COUNTRY.CUBE',
              CUBICLE: 'CUBICLE.CUBE',
              DANGERFIELD: 'DANGERFIELD.CUBE',
              DONT_BREATH: 'DONT_BREATH.cube',
              DUSK: 'DUSK.CUBE',
              ERA: 'ERA.CUBE',
              EVEREST: 'EVEREST.CUBE',
              FILMIC: 'FILMIC.CUBE',
              GHOST: 'GHOST.CUBE',
              HALFDOME: 'HALFDOME.CUBE',
              JOKER: 'JOKER.CUBE',
              LOS_ANGELES: 'LOS_ANGELES.CUBE',
              MANHATTAN: 'MANHATTAN.CUBE',
              OTHERDAY: 'OTHERDAY.CUBE',
              REMY: 'REMY.CUBE',
              STRANGERS: 'STRANGERS.CUBE',
              WISHAWOODS: 'WISHAWOODS.CUBE'
            }
          }
        },
        { collapsed: true }
      ),
      Bloom: folder(
        {
          bloomEnabled: true,
          luminanceThreshold: {
            value: 0.2,
            min: 0,
            max: 1
          },
          luminanceSmoothing: {
            value: 0.2,
            min: 0,
            max: 1
          },
          intensity: {
            value: 5,
            min: 0,
            max: 20
          }
        },
        { collapsed: true }
      ),
      Scanline: folder(
        {
          scanlineEnabled: false,
          scanlineStrength: {
            value: 0.05,
            min: 0,
            max: 1
          }
        },
        { collapsed: true }
      ),
      Vignette: folder(
        {
          vignetteEnabled: false,
          vignetteStrength: {
            value: 0.7,
            min: 0,
            max: 1
          },
          vignetteOffset: {
            value: 0,
            min: 0,
            max: 1
          }
        },
        { collapsed: true }
      )
    },
    { order: 3 }
  )
  const lutPath = `/textures/LUTs/${lut}`
  const lutTexture = useLoader(LUTCubeLoader, lutPath)

  return enabled ? (
    <EffectComposer multisampling={0} stencilBuffer autoClear>
      {bloomEnabled ? (
        <Bloom
          mipmapBlur
          intensity={intensity}
          luminanceThreshold={luminanceThreshold}
          luminanceSmoothing={luminanceSmoothing}
        />
      ) : (
        <></>
      )}
      {scanlineEnabled ? <Scanline opacity={scanlineStrength} /> : <></>}
      {vignetteEnabled ? (
        <Vignette
          offset={vignetteOffset}
          darkness={vignetteStrength}
          technique={VignetteTechnique.DEFAULT}
        />
      ) : (
        <></>
      )}
      {lutEnabled ? <LUT lut={lutTexture.texture} /> : <></>}
    </EffectComposer>
  ) : null
}

useLoader.preload(LUTCubeLoader, '/textures/LUTs/FILMIC.CUBE')
