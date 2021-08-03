import React from 'react'
import styles from './index.module.less'
import Image from 'next/image'
import alibaba from '../../public/alibaba.png'
import tencent from '../../public/tencent.png'
import byte from '../../public/Byte.png'

function Adverts() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={tencent} alt="" width={200} height={80} />
      </div>
      <div>
        <Image src={byte} alt="" width={200} height={70} />
      </div>
      <div>
        <Image src={alibaba} alt="" width={200} height={150} />
      </div>
    </div>
  )
}
export default Adverts
