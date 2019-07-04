import React from 'react'
import { Alert, Icons, Button } from 'linkdrop-ui-kit'
import { translate } from 'decorators'
import text from 'texts'
import styles from './styles.module'
import commonStyles from '../styles.module'
import variables from 'variables'
import { decentralandUrl } from 'app.config.js'

@translate('pages.main')
class ErrorPage extends React.Component {
  render () {
    const { error, network } = this.props
    const instructions = error === 'NETWORK_NOT_SUPPORTED' || error === 'NEED_METAMASK' ? this.t(`errors.${error}.instructions`, { returnObjects: true, network }) : {}
    const description = this.t(`errors.${error}.description`, { network })
    return <div className={commonStyles.container}>
      <Alert className={styles.alert} icon={this.defineIcon({ error })} />
      <div className={styles.title}>{this.t(`errors.${error}.title`)}</div>
      {description.length > 0 && <div className={styles.description}>{description}</div>}
      {Object.keys(instructions).length > 0 && <div className={styles.instructions}>
        {Object.keys(instructions).map(item => <div dangerouslySetInnerHTML={{ __html: instructions[item] }} />)}
      </div>}
      <Button className={styles.button} href={decentralandUrl}>
        {text('common.buttons.goToDecentraland')}
      </Button>
    </div>
  }

  defineIcon ({ error }) {
    switch (error) {
      case 'ALL_LINKS_CLAIMED':
      case 'LINK_EXPIRED':
        return <Icons.Clock fill={variables.decentralandColor} />
      case 'LINK_CANCELED':
        return <Icons.Cross fill={variables.decentralandColor} />
      default:
        return <Icons.Exclamation fill={variables.decentralandColor} />
    }
  }
}

export default ErrorPage
