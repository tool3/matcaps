'use client'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(SplitText)

import s from './loader.module.scss'

export default function Loader() {
  const { progress } = useProgress()

  useLayoutEffect(() => {
    const { chars } = new SplitText(`.${s.title}`, {
      type: 'chars'
    })

    const nums = new SplitText(`.${s.loading}`, {
      type: 'chars'
    })

    const tl = gsap.timeline()
    tl.to(nums.chars, {
      '-webkit-text-fill-color': 'white',
      stagger: 0.08
    })

    if (progress === 100) {
      tl.to(`.${s.title}`, { visibility: 'visible', delay: 1 }, '-=1')

      tl.to(
        nums.chars,
        {
          ease: 'expo.inOut',
          yPercent: -300,
          stagger: 0.08,
          duration: 2
        },
        '<'
      )

      tl.from(
        chars,
        {
          opacity: 1,
          ease: 'expo.inOut',
          y: '100vh',
          '-webkit-text-fill-color': 'white',
          transformOrigin: '0% 100%',
          stagger: 0.08,
          duration: 2
        },
        '-=2.3'
      )

      tl.to(nums.chars, {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        duration: 1.5
      })

      tl.to(
        [chars, nums.chars],
        {
          '-webkit-text-fill-color': 'transparent'
        },
        '<'
      )

      tl.to(
        chars,
        {
          ease: 'expo.inOut',
          y: '-100vh',
          stagger: 0.08,
          duration: 2
        },
        '<'
      )
      tl.to(
        `.${s.loader}`,
        {
          opacity: 0,
          duration: 0
        },
        '-=1'
      )

      tl.to(`.${s.loader}`, {
        display: 'none',
        duration: 0
      })
    }
    tl.play()
  }, [progress])

  const prog = `${progress.toFixed(0).padStart(3, '0')}%`

  return (
    <div className={s.loader}>
      <div className={s.title}>MATCAPS</div>
      <div className={s.loading}>{prog}</div>
      {/* <img src="/textures/matcaps/matcap_16.png" className={s.img} /> */}
    </div>
  )
}
