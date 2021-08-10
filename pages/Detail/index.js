import React from 'react'
import styles from './index.module.less'
import Header from '/components/Header/index.js'
import { Author } from '/components/Author'
import Adverts from '/components/Adverts/index'
import Footer from '/components/Footer/index'
import { Breadcrumb, Anchor } from 'antd'
import ReactMarkdown from 'react-markdown'
import {
  CalendarOutlined,
  FireOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
const { Link } = Anchor
export default function Home() {
  let markdown =
    '# P01 :课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '`console.log(111)` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  const getTransferMd = (markdown) => {
    const getStrArr = markdown.split('#')
    getStrArr.shift()
    const transferArr = getStrArr.map((i, ind) => {
      return (
        <div id={'p' + (ind + 1)} key={i}>
          <ReactMarkdown escapeHtml={true}>{'#' + i}</ReactMarkdown>
        </div>
      )
    })
    console.log(transferArr)
    return transferArr
  }

  const getAncorMd = getTransferMd(markdown)

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
          <div className={styles.title}>React总结内容-Daniel-Blog</div>
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
          <div className={styles.content}>{getAncorMd}</div>
        </div>
        <div className={styles.right}>
          <Author></Author>
          <Adverts></Adverts>
          <Anchor offsetTop={10} showInkInFixed>
            <Link href="#p1" title="Static demo" />
            <Link href="#p5" title="API"></Link>
          </Anchor>
        </div>
      </div>
      <Footer />
    </div>
  )
}
