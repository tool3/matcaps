'use client'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect } from 'react'

import s from './loader.module.scss'
import { isMobile } from 'react-device-detect'

gsap.registerPlugin(SplitText)

export default function Loader() {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    const { chars } = new SplitText([`.${s.title}`], {
      type: 'chars'
    })
    const { chars: chars2 } = new SplitText([`.${s.title2}`], {
      type: 'chars'
    })
    const { chars: chars3 } = new SplitText([`.${s.title3}`], {
      type: 'chars'
    })

    const { chars: chars4 } = new SplitText([`.${s.title4}`], {
      type: 'chars'
    })

    const delay = 0.01
    const yPercent = isMobile ? -150 : -100;

    tl.to(`.${s.wrapper}`, {
      height: '15rem',
      ease: 'expo.out',
      duration: 1
    })

    // pull up
    tl.to(
      chars,
      {
        ease: 'expo.inOut',
        yPercent,
        stagger: 0.08,
        duration: 2
      },
      '<'
    )
    tl.to(
      chars2,
      {
        ease: 'expo.inOut',
        yPercent,
        stagger: 0.08,
        delay,
        duration: 2
      },
      '<'
    )
    tl.to(
      chars3,
      {
        ease: 'expo.inOut',
        yPercent,
        delay,
        stagger: 0.08,
        duration: 2
      },
      '<'
    )
    tl.to(
      chars4,
      {
        ease: 'expo.inOut',
        yPercent,
        delay,
        stagger: 0.08,
        duration: 2
      },
      '<'
    )
    //

    tl.to(chars, {
      ease: 'expo.inOut',
      y: '-100vh',
      stagger: 0.08,
      duration: 2
    })

    tl.to(
      chars2,
      {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        delay,
        duration: 2
      },
      '<'
    )
    tl.to(
      chars3,
      {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        delay,
        duration: 2
      },
      '<'
    )
    tl.to(
      chars4,
      {
        ease: 'expo.inOut',
        y: '-100vh',
        stagger: 0.08,
        delay,
        duration: 2
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
        <div className={s.title2}>MATCAPS</div>
        <div className={s.title3}>MATCAPS</div>
        <div className={s.title4}>MATCAPS</div>
      </div>
    </div>
  )
}
