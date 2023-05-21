import Link from 'next/link'
import React from 'react'

import styles from './button.module.css'

export default function Button({children, link}) {
  return (
    <Link href={link} className={styles.btn}>{children}</Link>
  )
}
