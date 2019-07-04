import LinkdropSDK from '../../sdk/src/index'

import ora from 'ora'

import { ethers } from 'ethers'
import { terminal as term } from 'terminal-kit'
import { newError, getString, getUrlParams } from './utils'

ethers.errors.setLogLevel('error')

const JSON_RPC_URL = getString('jsonRpcUrl')
const HOST = getString('host')
const RECEIVER_ADDRESS = getString('receiverAddress')

const claim = async () => {
  let spinner

  try {
    spinner = ora({
      text: term.bold.green.str('Claiming\n'),
      color: 'green'
    })

    spinner.start()

    const {
      weiAmount,
      tokenAddress,
      tokenAmount,
      expirationTime,
      version,
      chainId,
      linkKey,
      linkdropMasterAddress,
      linkdropSignerSignature,
      isApprove
    } = await getUrlParams('eth', 0)

    const { error, success, txHash } = await LinkdropSDK.claim({
      jsonRpcUrl: JSON_RPC_URL,
      host: HOST,
      weiAmount,
      tokenAddress,
      tokenAmount,
      expirationTime,
      version,
      chainId,
      linkKey,
      linkdropMasterAddress,
      linkdropSignerSignature,
      receiverAddress: RECEIVER_ADDRESS,
      isApprove
    })

    if (success === true && txHash) {
      spinner.succeed(term.bold.str('Submitted claim transaction'))
      term.bold(`Tx hash: ^g${txHash}\n`)
    } else {
      throw newError(`${error.reason ? error.reason : error}`)
    }
  } catch (err) {
    spinner.fail(term.bold.red.str('Failed to claim'))
    throw newError(err)
  }
}

claim()
