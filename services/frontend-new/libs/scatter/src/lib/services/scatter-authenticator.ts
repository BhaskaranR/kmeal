import {
    Authenticator,
    ButtonStyle,
    Chain,
    SignTransactionConfig,
    SignTransactionResponse,
    UALError,
    UALErrorType,
    User
  } from 'universal-authenticator-library';
import { Scatter } from 'ual-scatter';
import { UALJs } from 'ual-plainjs-renderer';
  
  const signatureResponse = {
    wasBroadcast: true,
    transactionId: 'Transaction Id'
  } as SignTransactionResponse
  
  export class ScatterUser extends User {
    private accountName: string = ''
    private chains: Chain[] = []
  
    public constructor(accountName: string, chains: Chain[]) {
      super()
      this.accountName = accountName
      this.chains = chains
    }
  
    public getKeys() {
      return Promise.resolve([])
    }
  
    public signTransaction(transaction: any, config?: SignTransactionConfig) {
      console.info('Requested signature config', config)
      console.info('Requested signature for', transaction)
      return Promise.resolve(signatureResponse)
    }
  
    public getAccountName() {
      return Promise.resolve(this.accountName)
    }
  
    public getChainId() {
      return Promise.resolve(this.chains[0].chainId)
    }
  
    public signArbitrary(publicKey: string, data: string, helpText: string): Promise<string> {
      return new Promise((resolve, reject) => {
        reject(new UALError('Not implemented', UALErrorType.Signing, null, 'Mock User'))
      })
    }
  
    public verifyKeyOwnership(_: string): Promise<boolean> {
      return new Promise((resolve) => {
        resolve(true)
      })
    }
  }
  
  export class ScatterAuthenticator extends Authenticator {
    public loading: boolean = true
  
    constructor(chains: Chain[]) {
      super(chains)
    }
  
    public getOnboardingLink() {
      return 'https://localhost'
    }
  
    public getStyle() {
      return {
        /* tslint:disable */
        icon: '',
        /* tslint:enable */
        textColor: 'white',
        background: 'blue',
        text: 'Mock Auths'
      } as ButtonStyle
    }
  
    public shouldRender() {
      return true
    }
  
    public shouldAutoLogin() {
      return false
    }
    public login(accountName?: string) {
      alert('Mock Login Authenticator Triggered')
      console.info('Attempted login with ', accountName)
  
      // Simulate login delay response
      // return new Promise<[MockUser]>((resolve) => {
      //   setTimeout(() => {
      //     resolve([new MockUser(accountName || '', this.chains)])
      //   }, 4000)
      // })
      // return Promise.reject(new UALError('it broke', UALErrorType.Login, null, 'Mock Authenticator'))
  
      // Login without a delay response
      return Promise.resolve([new ScatterUser(accountName || '', this.chains)])
    }
  
    public shouldRequestAccountName() {
      return Promise.resolve(true)
    }
  
    public logout() {
      console.info('Logging out')
      return Promise.resolve()
    }
  
    public async init(): Promise<any> {
      this.loading = false
    }
  
    public isLoading(): boolean {
      return this.loading
    }
  
    public isErrored(): boolean {
      return false
    }
  
    public getError(): UALError | null {
      return new UALError('Initialization Error', UALErrorType.Initialization, null, 'this guy')
    }
  
    public reset() {
      console.info('resetting mock authenticator')
    }
  
    public requiresGetKeyConfirmation() {
      return false
    }
}


const network = {
    chainId: "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
    rpcEndpoints: [{
      protocol: 'https',
      host: "api.kylin.alohaeos.com",
      port: 443,
    }]
}

let loggedInUser: User;
//{"msg": "succeeded", "keys": {"active_key": {"public": "EOS7555wzLydhtAM6XzP7rcM2FFybnedp57c9m9EqBthaXQNjtGiw", "private": "5JT6m9cF3YtwiXBkoqvFNTnPsbQr1tDTpjRJQc3uGfRbLG6nJgP"}, "owner_key": {"public": "EOS8PTbL3WrEAzpcbKoqQkXs7JiPGBUSbm5GpLWx96hZgNiDtvKbZ", "private": "5KNC1d1XgizigdujAUjK8ubi2p2sqy8Nn8J7sEC3csBu9dqdqTo"}}, "account": "kmealtestio1"}
const userCallback = async (user: ScatterUser[]) => {
    loggedInUser=user[0];
    console.log('users : ', user);
    console.info('User Information:')
  console.info('Account Name:', await loggedInUser.getAccountName())
  console.info('Chain Id:', await loggedInUser.getChainId())
}

let scatter = new Scatter([network], {appName: 'kmeal'});
let scatterAuth = new ScatterAuthenticator([network]);

console.log(scatter, scatterAuth, ' scatter auth');

export const ual = new UALJs(
    userCallback,
    [network],
    'UAL Test',
    [scatter, scatterAuth],
    {
      containerElement: document.getElementById('ual-div')
    }
  )



