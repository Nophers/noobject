# Discord Authentication
**Todo: Add description**

## .env 
```env
COOKIE_SECRET= COOKIE_SECRET
CLIENT_ID= DISCORD CLIENT ID
CLIENT_SECRET= DISCORD CLIENT SECRET
CRYPT_KEYS= Array of crypt keys [2]
DOMAIN=http://localhost:3000 // Or the website domain
MONGODB_URI= MONGODB URI
MONGODB_DB= MONGODB COLLECTION NAME < ANY NAME >
REDIS_PORT=6379
REDIS_HOST=localhost
```

* Generating `CRYPT_KEYS` = 
```js
node -p "[ 32, 16 ].map(n => crypto.randomBytes(n).toString('base64'))"
```

* Cookie Secret ( At leat **32** characters long. ) <br />
#### [1password.com](https://1password.com/password-generator/)
