### Description: 

Authorization module based on access and refresh JWT tokens.

### How to start: 
- clone the repository code;
- add `.env` file to `server` folder with your params:
```
PORT
DB_URL
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
CLIENT_URL
---
Example values:

PORT=5000
DB_URL=mongodb+srv://auth:123@cluster0.upwxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
JWT_ACCESS_SECRET=secret-key
JWT_REFRESH_SECRET=refresh-secret-key
CLIENT_URL=http://localhost:3000

where:
PORT - port to start the server;
DB_URL - link for DB connection;
JWT_ACCESS_SECRET - your secret key for JWT access token;
JWT_REFRESH_SECRET - your secret key for JWT refresh token;
CLIENT_URL - client resource URL for CORS.
```
- install server dependencies -> `npm i` in the `server` root directory;
- install client dependencies -> `npm i` in the `client` root directory;
- run server -> `npm run dev` in the `server` root directory;
- run client -> `npm start` in the `server` root directory;

### Supported additional scripts:
- `npm run debug` (server);
- `npm run eslint` (server/client);
- `npm run eslintFix` (server/client).

### Server stack:

- express;
- mongoDB + mongoose;
- express-validator;
- dotenv
- jsonwebtoken;
- cookie-parser;
- bcrypt;
- uuid;
- cors;
- nodemon;
- colors;
- eslint.

### Client stack:

- typescript;
- react;
- mobX;
- axios;
- eslint.
