import { Client, QueueThrottler } from "clashofclans.js";
import config from "../../config.json";

const client = new Client({ 
    keys: [config.apikey],
    cache: true, 
    retryLimit: 5,
    restRequestTimeout: 3000,
    throttler: new QueueThrottler(2000 / 10)
});

export default client;
