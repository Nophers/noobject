import { Client, HTTPError } from "clashofclans.js";
import config from "../../config.json";
import client from "../client/login";

(async () => {
    try {
        const { data } = await client.rest.getClan(config.clantag);
        console.log(data);
    } catch(error) {
        if(error instanceof HTTPError && error.status === 404) {
            console.log("Clan does not exist.")
        }
    }
})();

