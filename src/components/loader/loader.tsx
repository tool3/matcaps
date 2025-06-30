'use client'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect } from 'react'

import s from './loader.module.scss'

gsap.registerPlugin(SplitText)

export default function Loader() {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    const { chars } = new SplitText(`.${s.title}`, {
      type: 'chars'
    })

    tl.to(`.${s.wrapper}`, {
      height: '8rem',
      ease: 'expo.out',
      duration: 1
    })

    tl.to(
      chars,
      {
        ease: 'expo.inOut',
        '-webkit-text-fill-color': 'white',
        yPercent: -100,
        stagger: 0.08,
        duration: 2
      },
      '<'
    )

    tl.to(
      chars,
      {
        ease: 'expo.inOut',
        stagger: 0.08,
        '-webkit-text-fill-color': 'transparent'
      },
      '-=2.5'
    )

    tl.to(chars, {
      ease: 'expo.inOut',
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
      height: '99%',
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

    tl.play()
  }, [])

  return (
    <div className={s.loader}>
      <div className={s.wrapper}>
        <div className={s.title}>MATCAPS</div>
      </div>
    </div>
  )
}
