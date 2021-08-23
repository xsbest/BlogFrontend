import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import axios from 'axios'
import apiUrl from '../../config/apiUrl'
import Router from 'next/router'
import { Menu } from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(apiUrl.getTypeInfo)
      console.log(res);
      setNavArray(res.data.data)
    }
    fetchData()
  }, [])
  const handleClick = (e) => {
    if (e.key === 'home') {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {/* <div className={styles.headPic}>
          <Image src={headPic} width={60} height={60} alt=""></Image>
        </div> */}
        <span className={styles['header-name']}>Daniel ____</span>
        <span className={[styles['print-text']]
          .join(' ')}>一个热爱生活的切图仔</span>
      </div>

      <div className={styles.right}>
        <Menu mode="horizontal">
          <Menu.Item key="home" onClick={handleClick} icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="video" onClick={handleClick} icon={<VideoCameraOutlined />}>
            视频
          </Menu.Item>
          <Menu.Item key="life" onClick={handleClick} icon={<SmileOutlined />}>
            生活
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default Header
