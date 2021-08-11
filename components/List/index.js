import React, { useState } from 'react'
import { List } from 'antd'
import styles from './index.module.less'
import {
  CalendarOutlined,
  FireOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
export default function MyList(props) {
  const { source } = props
  const [mylist, setMylist] = useState(source)
  console.log(mylist);
  return (
    <div>
      <List
        itemLayout="vertical"
        header={
          <div>
            <h3>今日要点</h3>
          </div>
        }
        dataSource={mylist}
        renderItem={(item) => {
          console.log(item.id);
          return (
            <List.Item style={{ borderBottom: '1px solid #eee' }}>
              <div className={styles.title}>
                <Link href={{ pathname: '/Detail', query: { id: item.id } }}>
                  <a>{item.title}</a>
                </Link>
              </div>
              <div className={styles.labels}>
                <span>
                  <CalendarOutlined />
                  &nbsp;
                  {item.addTime}
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
              <div>{item.introduce}</div>
            </List.Item>
          )
        }}
      ></List>
    </div>
  )
}
