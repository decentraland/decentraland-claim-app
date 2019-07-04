import React from 'react'
import { Alert, Icons, Button } from 'linkdrop-ui-kit'
import { translate, actions } from 'decorators'
import styles from './styles.module'
import commonStyles from '../styles.module'
import { getHashVariables } from 'linkdrop-commons'
import config from 'config-claim'
import classNames from 'classnames'
import variables from 'variables'
import text from 'texts'
import { decentralandUrl } from 'app.config.js'

@actions(({ tokens: { transactionId } }) => ({ transactionId }))
@translate('pages.main')
class ClaimingFinishedPage extends React.Component {
  render () {
    const { chainId } = getHashVariables()
    const { transactionId, amount, symbol } = this.props
    return <div className={commonStyles.container}>
      <Alert icon={<Icons.Check fill={variables.decentralandColor} />} className={styles.alert} />
      <div className={styles.title} dangerouslySetInnerHTML={{ __html: this.t('titles.tokensClaimed', { tokens: `${amount || ''} ${symbol || ''}` }) }} />
      <div
        className={classNames(styles.description, {
          [styles.descriptionHidden]: !transactionId
        })}
        dangerouslySetInnerHTML={{
          __html: this.t('titles.seeDetails', {
            transactionLink: `${Number(chainId) === 4 ? config.etherscanRinkeby : config.etherscanMainnet}${transactionId}`
          })
        }}
      />
      <Button className={styles.button} href={decentralandUrl}>
        {text('common.buttons.goToDecentraland')}
      </Button>
    </div>
  }
}

export default ClaimingFinishedPage
