import client from "./login";
import config from "../../config.json"

(async () => {
    await client. getPlayer(config.playertag, { force: true });

    await client.getClan(config.clantag, { cache: false });

    await client.getClan(config.clantag, { restRequestTimeout: 5 });

    await client.getPlayer(config.playertag, { ignoreRateLimit: true });

    await client.getSeasonRankings(config.season, { restRequestTimeout: 4});
})();