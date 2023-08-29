# JSONServer with Authentication

MockWebAPI (JSON Server) with WebAPI authentication in Node.js.

## Install

```bash
npm install
```

## Run

```bash
npm run api:auth
```

## Login API

```
POST http://localhost:3000/auth/login
```

### Request Content-Type

```
Content-Type: application/json
```

### Request Body

```
{
  "email": "craig@test.com",
  "password":"abc123"
}
```

- See `data\users.json` for additional valid email/password combinations or to change them.
  - Note: if you change data in `data\users.json` the server will need to be restarted before you will see the changes.

### Response Body (200 OK)

```
{
   "access_token": "XXXXXXXXXXXXXXXX"
}
```

## Auth Required API

```
GET     http://localhost:3000/users
GET     http://localhost:3000/users/1
POST    http://localhost:3000/users
PUT     http://localhost:3000/users/1
DELETE  http://localhost:3000/users/1
```

## Auth Request Header (required access_token)

```
Authorization: Bearer XXXXXX
```

### Response Body (401 Unauthorized)

```
{
  "status": 401,
  "message": "Error access_token is revoked"
}
```

### Testing

To test run the requests in the files inside the `test` directory using a tool like [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) in Visual Studio Code.

- `login-post.http`
- `user-get.http`
  - The token that appears in the header after `Authorization: Bearer` will need to be updated from the response received from `login-post.http`.

These are the same requests a client application like `ngauth` makes.

### Resources

[JSON Web Tokens (Basics/JWT)](https://medium.com/@piraveenaparalogarajah/json-web-tokens-jwt-basics-6515b13077e8)

[CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[Uses OAuth 2](https://security.stackexchange.com/questions/108662/why-is-bearer-required-before-the-token-in-authorization-header-in-a-http-re)

[Preflight requests with CORS](http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/)

[Forked from](https://github.com/oz4you/mock-auth-json-server)
