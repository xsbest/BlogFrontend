import React from 'react'
import styles from './index.module.less'
import Header from '/components/Header/index.js'
import { Author } from '/components/Author'
import Adverts from '/components/Adverts/index'
import Footer from '/components/Footer/index'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <Author></Author>
          <Adverts></Adverts>
        </div>
      </div>
      <Footer />
    </div>
  )
}
