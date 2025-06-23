'use client'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(SplitText)

import s from './loader.module.scss'

export default function Loader() {

  useLayoutEffect(() => {
    const tl = gsap.timeline()
    let allowUpdate = true
    const { chars } = new SplitText(`.${s.title}`, {
      type: 'chars'
    })

    const nums = new SplitText(`.${s.loading}`, {
      type: 'chars'
    })

    gsap.to(nums.chars, {
      ease: 'expo.inOut',
      yPercent: -100,
      duration: 1,
      stagger: 0.08
    })

    gsap.to(nums.chars, {
      ease: 'expo.inOut',
      duration: 1,
      delay: 1,
      stagger: 0.08,
      onUpdate: () => {
        const first = nums.chars[0] as any
        const second = nums.chars[1] as any
        const third = nums.chars[2] as any

        if (second.textContent <= 9 && allowUpdate) {
          second.textContent = Number(second.textContent) + 1
        }

        if (third.textContent <= 9 && allowUpdate) {
          third.textContent = Number(third.textContent) + 1
        }

        if (second.textContent == 9 && third.textContent == 9) {
          first.textContent = 1
          second.textContent = 0
          third.textContent = 0

          allowUpdate = false
        }
      }
    })

    tl.to(nums.chars, {
      ease: 'expo.inOut',
      y: '-100vh',
      delay: 1,
      stagger: 0.08,
      duration: 2
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

    tl.play()
  }, [])

  return (
    <div className={s.loader}>
      <div className={s.wrapper}>
        <div className={s.title}>MATCAPS</div>
        <div className={s.loading}>{'000%'}</div>
      </div>
    </div>
  )
}
