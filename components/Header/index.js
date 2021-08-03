import React from 'react'
import styles from './index.module.less'
import Image from 'next/image'
import headPic from '../../public/head.jpg'
import { Menu } from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const Header = () => {
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
          <Menu.Item key="home" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="video" icon={<VideoCameraOutlined />}>
            视频
          </Menu.Item>
          <Menu.Item key="life" icon={<SmileOutlined />}>
            生活
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default Header
