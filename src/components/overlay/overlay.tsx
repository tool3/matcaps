'use client'

import { useLayoutEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import styles from './overlay.module.scss'

export default function Overlay() {
  const [text, setText] = useState(
    'Use ← and → to navigate matcaps, or use menu on top right'
  )

  useLayoutEffect(() => {
    if (isMobile) {
      setText('Use menu on the top to change models and matcaps')
    }
  }, [])

  return <div className={styles.overlay}>{text}</div>
}
