import React from 'react'
import { Avatar, Button, Divider, Popover } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import headPic from '../../public/head.jpg'
import wechat from '../../public/wechat.png'
import qq from '../../public/qq.png'
import styles from './index.module.less'

export const Author = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.headPic}>
        <Image src={headPic} width={60} height={60} alt=""></Image>
      </div>
      <div className={styles.discription}>
        The guy is a handsome boy who always be tough, strong, and
        undefeatable.If sombody else want to get communication with him, please
        do it by the ways below.
      </div>
      <Divider style={{ fontWeight: 500, border: '#ccc' }}>
        contact details
      </Divider>
      <div className={styles.icons}>
        <Popover
          content={<div style={{ color: '#666' }}>点击访问GitHub</div>}
          trigger="hover"
        >
          <GithubOutlined
            onClick={() => {
              router.push('https://github.com/Danneil-525')
            }}
          />
        </Popover>
        <Popover
          content={
            <div>
              <Image src={qq} width={100} height={130} alt="" />
            </div>
          }
          trigger="click"
        >
          <QqOutlined />
        </Popover>
        <Popover
          content={
            <div>
              <Image src={wechat} width={100} height={130} alt="" />
            </div>
          }
          trigger="click"
        >
          <WechatOutlined />
        </Popover>
      </div>
    </div>
  )
}
