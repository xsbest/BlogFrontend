import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from 'antd'
import Header from '../components/Header/index.js'
export default function Home() {
  return (
    <div className={styles.container}>
      <Button type="primary">011231</Button>
      <Header/>
    </div>
  )
}
