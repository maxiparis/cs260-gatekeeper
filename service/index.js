const express = require('express');
const app = express();
const uuid = require('uuid');


// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

let users = {}
let entries = []

//make sure to parse the body from json
app.use(express.json());

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Serve up the static content
app.use(express.static('dist'));



// Login
// Expecting object like:
// {   "password": String,
//     "username": String
// }
apiRouter.post('/auth/login', async (req, res) => {

  const user = users[req.body.username];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      return res.send({ token: user.token, firstName: user.firstName });
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});


//Create a user - Signup
// Expecting object like:
// {   "password": String,
//     "username": String,
//     "firstName": String,
//     "lastName": String
// }
apiRouter.post('/auth/create', async (req, res) => {

  const validationChecks = [
    { valid: ('username' in req.body && 'password' in req.body), message: "Username and password are required" },
    { valid: req.body.password, message: "Password cannot be an empty string" },
    { valid: req.body.username, message: "Username cannot be an empty string" },
    { valid: req.body.firstName, message: "First name cannot be an empty string" },
    { valid: req.body.lastName, message: "Last name cannot be an empty string" },
    { valid: !users[req.body.username], message: "Username already taken" }
  ]

  for (let check of validationChecks) {
    if (!check.valid) {
      return sendResponseWithMessage( { res: res, message: check.message })
    }
  }

  // Check if the username has been registered already
    const newUser = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      token: uuid.v4()
    };
    users[newUser.username] = newUser;
    console.log(users);
    res.send( { token: newUser.token } );
})

// Logout



// // Provide the version of the application
// app.get('/config', (_req, res) => {
//   res.send({ version: '20221228.075705.1', name: serviceName });
// });
//
// // Return the homepage if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'dist' });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port} - http://localhost:${port}`);
});

function sendResponseWithMessage( { res, message, status = 400 } ) {
  res.status(status).send({ message: message });
}
