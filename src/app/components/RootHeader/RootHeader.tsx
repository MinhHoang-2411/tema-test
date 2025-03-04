import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import HeaderActionButtons from './HeaderActionButtons'
import HeaderSearch from './HeaderSearch'
import Sidebar from './Sidebar'
function RootHeader() {
  return (
    <div className={styles.headerContainer}>
      {/* side bar  */}
      <div className={styles.sidebarContainer} >
        <Sidebar/>
      </div>
      <Link href='/'>
        <Image src='/logo.svg' width={250} height={41} alt='logo'/>
      </Link>
      {/* search  */}
      <div className={styles.searchContainer}>
        <HeaderSearch/>
      </div>
      {/* act btns  */}
      <HeaderActionButtons/>
      {/* cart btn  */}
    </div>
  )
}

export default RootHeader