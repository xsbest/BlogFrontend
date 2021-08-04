import React from 'react'
import styles from '../styles/Home.module.less'
import Header from '../components/Header/index.js'
import { Author } from '../components/Author'
import Adverts from './../components/Adverts/index'
import Footer from './../components/Footer/index'
import MyList from './../components/List/index'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          <MyList />
        </div>
        <div className={styles.right}>
          <Author></Author>
          <Adverts></Adverts>
        </div>
      </div>
      <Footer />
    </div>
  )
}
