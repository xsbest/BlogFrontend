import React from 'react'
import styles from './index.module.less'
import Header from '/components/Header/index.js'
import { Author } from '/components/Author'
import Adverts from '/components/Adverts/index'
import Footer from '/components/Footer/index'
import { Breadcrumb } from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.headBreadCrumb}>
            <Breadcrumb style={{ fontSize: 16, backgroundColor: '#c0e8f7' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>视频</Breadcrumb.Item>
              <Breadcrumb.Item>xxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.title}>
            React总结内容-Daniel-Blog
          </div>
          <div className={styles.icons}>
            <span>
              <CalendarOutlined />
              &nbsp;
              {new Date().toLocaleDateString().split('/').join('-')}
            </span>
            <span>
              <VideoCameraOutlined />
              &nbsp; 视频
            </span>
            <span>
              <FireOutlined />
              &nbsp; 5555人
            </span>
          </div>
          <div className={styles.content}>
            asdasdadsa
          </div>
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
