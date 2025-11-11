'use client'

import { useLayoutEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import styles from './overlay.module.scss'

export default function Overlay() {
  const [text, setText] = useState(
    'Use ← and → to navigate matcaps | Use menu to change models'
  )

  useLayoutEffect(() => {
    if (isMobile) {
      setText('Use the menu to change models and matcaps')
    }
  }, [])

  return <div className={styles.overlay}>{text}</div>
}
