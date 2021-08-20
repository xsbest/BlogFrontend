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
import { markdown } from './md'
import axios from 'axios'
import apiUrl from '../../config/apiUrl'
const { Link } = Anchor

const Detail = (props) => {

  console.log(props.article_content);
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
    return transferArr
  }

  const getAncorMd = getTransferMd(props.article_content)

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
            {
              getAncorMd.map((i, ind) => {
                const tit = i.key
                const a = tit.search('\n')
                const newStr = tit.slice(0, a)
                return (
                  < Link key={"p" + ind} href={"#p" + (ind + 1)} title={newStr} />
                )
              })
            }
          </Anchor>
          ,
        </div>
      </div>
      <Footer />
    </div>
  )
}
Detail.getInitialProps = async (ctx) => {
  const id = ctx.query.id
  const promise = new Promise((resolve) => {
    axios(apiUrl.getArticleById + '?id=' + id).then(res => {
      console.log(res.data.data[0]);
      resolve(res.data.data[0])
    })
  })
  const res = await promise
  return res
}
export default Detail
