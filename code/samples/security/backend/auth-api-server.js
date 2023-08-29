const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router("./data/users.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const SECRET_WORD = "SECRET1234";
const expiresIn = "1h";

const createToken = payload => jwt.sign(payload, SECRET_WORD, { expiresIn });
const verifyToken = token =>
  new Promise((resolve, reject) =>
    jwt.verify(
      token,
      SECRET_WORD,
      (err, decode) => (decode !== undefined ? resolve(decode) : reject(err))
    )
  );

const userCredentials = JSON.parse(
  fs.readFileSync("./data/user-credentials.json", "UTF-8")
);
const isAuth = ({ email, password }) =>
  userCredentials.users.findIndex(
    user => user.email === email && user.password === password
  ) !== -1;

server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (isAuth({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  // const access_token = createToken({ email, password });
  const access_token = createToken(findUserByEmail(email));
  res.status(200).json({ access_token, success: true });
});

const usersdb = JSON.parse(fs.readFileSync("./data/users.json", "UTF-8"));

const findUserByEmail = email => {
  return usersdb.users.find(user => user.email === email);
};

server.use(/^(?!\/auth).*$/, async (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    await verifyToken(req.headers.authorization.split(" ")[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("Running Auth API Server");
});

//manual implementation of CORS; is implmented now using: const middlewares = jsonServer.defaults(); server.use(middlewares);
// Add headers
// server.use(function(req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type, Authorization"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });

// server.options("/users/:id", (req, res) => {
//   const status = 200;
//   const message = "OK";
//   res.status(status).json({ status, message });
// });

// server.options("/auth/login", (req, res) => {
//   const status = 200;
//   const message = "OK";
//   res.status(status).json({ status, message });
// });
