import { Client } from "clashofclans.js";
import config from "../../config.json";

const client = new Client({ 
    keys: [config.apikey],
    cache: true
})

client.events.addClans([ config.clantag ]);
client.events.setClanEvent({
    name: 'clanDescriptionChange',
    filter: (oldClan, newClan) => {
        return oldClan.description !== newClan.description;
    }
});

client.on('clanDescriptionChange', (oldClan, newClan) => {
    console.log(oldClan.description, newClan.description);
});

(async function() {
    await client.events.init();
});