import React from 'react'
import style from './index.module.less'
import Image from 'next/image'
import headPic from '../../public/head.jpg'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.left}>
        <div className={style.headPic}>
          <Image src={headPic} width={60} height={60} alt=""></Image>
        </div>
        <span className={style['header-logo']}>Daniel ____</span>
        <span className={style['header-logo']}>一个热爱生活的切图仔</span>
      </div>

      <div className={style.right}>
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
