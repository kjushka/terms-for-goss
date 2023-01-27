import type { FC } from 'react'

import styles from './user.module.scss'

export const User: FC = () => {
  return (
    <a className={styles.user} href="https://vk.com/imigaka" target="_blank">
      <span>Петров А.В. (P42072)</span>
      <img src="https://sun9-83.userapi.com/impg/pbQHCUtrNUQx82DxSQXTz_CLI0KJ4TGgRs-fwA/j6MEhiMdXS0.jpg?size=1620x2160&quality=95&sign=bd067d5ed16f0f811510d5f4d32b79de&type=album" />
    </a>
  )
}
