// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_entry: 'https://kmeal-api.herokuapp.com/v1alpha1/graphql',
  ws_api_entry: 'wss://kmeal-api.herokuapp.com/v1alpha1/graphql',
  eos_network:  {
    blockchain: "eos",
    protocol: "http",
    host: "jungle2.cryptolions.io",
    port: 80,
    // chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906" // EOS Main Net
    chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473" // Jungle
  },
  eos_endpoint : "http://jungle2.cryptolions.io:80",
  eos_contract_name: "kmeal",
  firebase: {
    apiKey: "AIzaSyA6xeCf1xnEG9gmT1J3pFVJf2dgXOrvCDg",
    authDomain: "web-kmeal-restaurant.firebaseapp.com",
    databaseURL: "https://web-kmeal-restaurant.firebaseio.com",
    projectId: "web-kmeal-restaurant",
    storageBucket: "web-kmeal-restaurant.appspot.com",
    messagingSenderId: "882161751449"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
