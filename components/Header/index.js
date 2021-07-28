import React from 'react'
import style from './index.module.less'
import {Row,Col, Menu,Icon, HomeOutlined,VideoCameraOutlined,GithubOutlined} from 'antd'
const Header = ()=>{
  return (
    <div className={style.header}>
        <Row type="flex" justify="center">
          <Col>
            <span className={style['header-logo']}>log</span>
            <span className={style['header-logo']}>记录前端学习历程</span>
          </Col>
          <Col>
          <Menu mode="horizontal">
              <Menu.Item key="1" icon={<HomeOutlined />}>
              sassas
              </Menu.Item>
          </Menu>
          </Col>
        </Row>
      </div>
  )
}

export default Header;