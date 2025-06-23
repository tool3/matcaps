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

    if (progress === 100) {
      tl.to(`.${s.title}`, { visibility: 'visible', delay: 1 }, '-=1')

      tl.to(
        nums.chars,
        {
          ease: 'expo.inOut',
          yPercent: -300,
          stagger: 0.08,
          '-webkit-text-fill-color': 'white',
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

      tl.to([nums.chars, chars], {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        duration: 2
      })

      tl.to(
        [chars, nums.chars],
        {
          '-webkit-text-fill-color': 'transparent'
        },
        '<'
      )
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
          zIndex: 0
        },
        '-=0.5'
      )
    }
    tl.play()
  }, [progress])

  const prog = `${progress.toFixed(0).padStart(3, '0')}%`

  return (
    <div className={s.loader}>
      <div className={s.wrapper}>
        <div className={s.title}>MATCAPS</div>
        <div className={s.loading}>{prog}</div>
      </div>
    </div>
  )
}
