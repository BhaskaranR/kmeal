import express from 'express';
import { json } from 'body-parser';
const app = express();

import { validateOrder } from 'validate-order';
import { makePayment } from 'payment';
import { restaurantApproval } from 'restaurant-approval';
import { assignAgent } from 'agent-assignment';

app.use(json());

app.post('/validate-order', async function (req, res) {
    try{
        var order;
        if(req.body.event) {
            order = req.body.event.data.new;
        } else {
            order = req.body;
        }
        var result = await validateOrder(order);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.status(500).json(e.toString());
    }
});

app.post('/payment', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        if (req.method == "OPTIONS") {
	    res.json("");
	    return;
        }
        var paymentReq = req.body;
        var result = await makePayment(paymentReq);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.status(500).json(e.toString());
    }
});

app.post('/restaurant-approval', async function (req, res) {
    try {
        var order;
        if(req.body.event) {
            order = req.body.event.data.new;
        } else {
            order = req.body;
        }
        var result = await restaurantApproval(order);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.status(500).json(e.toString());
    }
});

app.post('/agent-assignment', async function (req, res) {
    try {
        var order;
        if(req.body.event) {
            order = req.body.event.data.new;
        } else {
            order = req.body;
        }
        var result = await assignAgent(order);
        res.json(result);
    } catch(e) {
        console.log(e);
        res.status(500).json(e.toString());
    }
});

var server = app.listen(8081, function () {
    console.log("server listening on port 8081");
});
