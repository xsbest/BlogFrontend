import React from 'react'
import { Avatar, Button, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import Image from 'next/image'
import headPic from '../../public/head.jpg'
import styles from './index.module.less'

export const Author = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headPic}>
        <Image src={headPic} width={60} height={60} alt=""></Image>
      </div>
      <div className={styles.discription}>
        The guy is a handsome boy who always be tough, strong, and undefeatable.If sombody else want to
        get communication with him, please do it by the ways below.
      </div>
      <Divider style={{ fontWeight: 500, border: '#ccc' }}>
        contact details
      </Divider>
      <div className={styles.icons}>
        <GithubOutlined />
        <QqOutlined />
        <WechatOutlined />
      </div>
    </div>
  )
}
