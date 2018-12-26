"use strict";
exports.__esModule = true;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
console.log('starting...');
var node_cron_1 = require("node-cron");
var axios_1 = require("axios");
var eosjs_1 = require("eosjs");
var eosJS = eosjs_1["default"]({
    keyProvider: process.env.PRIVATE_KEY,
    httpEndpoint: process.env.ENDPOINT,
    chainId: process.env.CHAIN_ID
});
node_cron_1["default"].schedule('*/5 * * * *', function () {
    axios_1["default"]
        .get('https://api.bitfinex.com/v2/ticker/' + process.env.PAIR)
        .then(function (response) {
        var pair = parseFloat(response.data[6]).toFixed(4);
        console.log(pair);
        eosJS.transaction({
            actions: [
                {
                    account: process.env.NEBULA_ACCOUNT,
                    authorization: [
                        { actor: process.env.ACCOUNT, permission: process.env.PERMISSION }
                    ],
                    data: {
                        account: process.env.ACCOUNT,
                        base: process.env.BASE,
                        quote: pair + ' ' + process.env.QUOTE,
                        exchange: process.env.EXCHANGE,
                        volume: 0,
                        timeframe: 300
                    },
                    name: 'addquote'
                }
            ]
        })["catch"](function (error) {
            console.error(error);
        });
    });
});
