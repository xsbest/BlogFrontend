import React from 'react'
import styles from '../styles/Home.module.less'
import Header from '../components/Header/index.js'
import { Author } from '../components/Author'
import Adverts from './../components/Adverts/index'
import Footer from './../components/Footer/index'
import MyList from './../components/List/index'
import axios from 'axios'
import apiUrl from '../config/apiUrl'
const Home = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          <MyList source={data} />
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

Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(apiUrl.getArticleList).then((res) => {
      resolve(res.data);
    })
  })
  return await promise
}
export default Home