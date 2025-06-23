'use client'
import { useProgress } from '@react-three/drei'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(SplitText)

import s from './loader.module.scss'

export default function Loader() {
  const { progress } = useProgress()
  const prog = `${progress.toFixed(0).padStart(3, '0')}%`

  useLayoutEffect(() => {
    const { chars } = new SplitText(`.${s.title}`, {
      type: 'chars'
    })

    const nums = new SplitText(`.${s.loading}`, {
      type: 'chars'
    })

    const tl = gsap.timeline()
    tl.to(
      nums.chars,
      {
        ease: 'expo.inOut',
        yPercent: -150,
        stagger: 0.08,
        duration: 2,
        '-webkit-text-fill-color': 'white'
      },
      '<'
    )

    if (progress === 100) {
      tl.to(nums.chars, {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        duration: 2
      })

      tl.to(
        chars,
        {
          opacity: 1,
          ease: 'expo.inOut',
          yPercent: -60,
          '-webkit-text-fill-color': 'white',
          stagger: 0.08,
          duration: 2
        },
        '<'
      )

      tl.to(chars, {
        ease: 'expo.inOut',
        '-webkit-text-fill-color': 'transparent',
        y: '-100vh',
        stagger: 0.08,
        duration: 2
      })

      tl.to(
        `.${s.wrapper}`,
        {
          height: 0,
          ease: 'expo.inOut'
        },
        '-=1'
      )

      tl.to(`.${s.wrapper}`, {
        height: '100%',
        ease: 'expo.out'
      })

      tl.to(
        `.${s.loader}`,
        {
          opacity: 0,
          transformOrigin: 'center center',
          ease: 'expo.inOut'
        },
        '-=0.5'
      )
    }
    tl.play()
  }, [progress])

  return (
    <div className={s.loader}>
      <div className={s.wrapper}>
        <div className={s.title}>MATCAPS</div>
        <div className={s.loading}>{prog}</div>
      </div>
    </div>
  )
}
