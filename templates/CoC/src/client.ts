import config from "../config.json";
import { Client, BatchThrottler, /* QueueThrottler */ } from 'clashofclans.js';
import Keyv from "keyv";

const keyv = new Keyv(config.database, { table: 'cache' });
keyv.on('error', handleConnectionError);

/*
BatchThrottler allows a group of requests to happen every second. 
For example, 30 requests every second.

QueueThrottler allows requests to happen every x milliseconds. 
For example, a single request every 100 milliseconds.
*/

// BatchThrottler
const client = new Client({ 
    keys: [config.apikey],
    cache: true,              // enable caching
    retryLimit: 5,
    restRequestTimeout: 3000, // 3 seconds 
    throttler: new BatchThrottler(30) // requests per queue group
});

(async function() {
    await client.login({ 
        email: config.email, 
        password: config.password,
        keyCount: 2,
        keyName: config.keyname
    });
})();

function handleConnectionError(arg0: string, handleConnectionError: any) {
    throw new Error("Function not implemented.");
}
