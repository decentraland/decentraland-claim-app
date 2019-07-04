import React from 'react'
import { RetinaImage } from 'linkdrop-ui-kit'
import { getImages } from 'helpers'
import style from './styles.module'

class Header extends React.Component {
  render () {
    return <header className={style.container}>
      <RetinaImage width={200} {...getImages({ src: 'decentraland' })} />
    </header>
  }
}

export default Header
