import { Scatter } from 'ual-scatter'
import { User, Authenticator } from 'universal-authenticator-library'
import { UALJs } from 'ual-plainjs-renderer'
import { JsonRpc } from 'eosjs';
import { ScatterAuthenticator, ScatterUser } from './ual-auth';
import { Injectable } from '@angular/core';

const appName = 'kmeal';

export const demoTransaction = {
    actions: [{
      account: "eosio.token",
      name: "transfer",
      authorization: [{
        actor: "", // use account that was logged in
        permission: "active",
      }],
      data: {
        from: "", // use account that was logged in
        to: "kmealtestio1",
        quantity: "1.0000 EOS",
        memo: "UAL works!",
      },
    }],
  }

// Example environment type definition
interface ExampleEnv {
  CHAIN_ID: string,
  RPC_PROTOCOL: string,
  RPC_HOST: string,
  RPC_PORT: string
}

declare var EXAMPLE_ENV: ExampleEnv

let loggedInUser: User

const network = {
    chainId: "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
    rpcEndpoints: [{
      protocol: 'https',
      host: "api.kylin.alohaeos.com",
      port: 443,
    }]
}

let balanceUpdateInterval

const userCallback = async (users: User[]) => {
  loggedInUser = users[0]
  console.info('User Information:')
  console.info('Account Name:', await loggedInUser.getAccountName())
  console.info('Chain Id:', await loggedInUser.getChainId())

  balanceUpdateInterval = setInterval(updateBalance, 1000)

  const transferDiv = document.getElementById('div-transfer')
  transferDiv!.style.display = 'block'
}

export const scatter = new Scatter([network], {appName:appName});
//const u = new ScatterUser('test',[network]);
//export let scatterAuth = new ScatterAuthenticator([network]);
console.log('scatter init ', scatter);

export const ual = new UALJs(
  userCallback,
  [network],
  appName,
  [scatter],
  {
    containerElement: document.getElementById('ual-div')
  }
)


//addTransferButtonEventListener()

function addTransferButtonEventListener() {
  const transferButton = document.getElementById('btn-transfer')

  transferButton!.addEventListener('click', async () => {
    // Update our demo transaction to use the logged in user
    const userAccountName = await loggedInUser.getAccountName()
    demoTransaction.actions[0].authorization[0].actor = userAccountName
    demoTransaction.actions[0].data.from = userAccountName

    loggedInUser.signTransaction(
      demoTransaction,
      { broadcast: true }
    )
  })
}

//addLogoutButtonListener()

function addLogoutButtonListener() {
  const logoutButton = document.getElementById('btn-logout')

  logoutButton!.addEventListener('click', async () => {
    clearInterval(balanceUpdateInterval)

    const transferDiv = document.getElementById('div-transfer')
    transferDiv!.style.display = 'none'

    ual.logoutUser()
  })
}

async function updateBalance() {
  const balanceTag = document.getElementById('p-transfer')

  try {
    const rpc = new JsonRpc(`${EXAMPLE_ENV.RPC_PROTOCOL}://${EXAMPLE_ENV.RPC_HOST}`)
    const accountName = await loggedInUser.getAccountName()
    const data = await rpc.get_account(accountName)

    const { core_liquid_balance: balance } = data
    balanceTag!.innerHTML = `Account Liquid Balance: ${balance}`

  } catch (e) {
    console.error(e)
    balanceTag!.innerHTML = `Unable to retrieve account balance at this time`
  }
}