const express = require('express');
const app = express();
const uuid = require('uuid');


// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

let users = {}
let entries = [
  {
    date: "2024-11-12",
    time: "12:20",
    location: "Library",
    type: "Patrol",
    notes: "Completed routine patrol of the library; no incidents noted.",
    author: "Maximiliano"
  }
]

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
  console.log("-- Login");
  const user = users[req.body.username];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      console.table(users)
      return res.send({ token: user.token, firstName: user.firstName });
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
  console.table(users)
});


//Create a user - Signup
// Expecting object like:
// {
//     "password": String,
//     "username": String,
//     "firstName": String,
//     "lastName": String
// }
apiRouter.post('/auth/create', async (req, res) => {
  console.log("-- Signup");
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
    console.table(users);
    res.send( { token: newUser.token } );
})


// Logout
// Expecting object like:
// {
//   "token": String
// }
apiRouter.delete('/auth/logout', (req, res) => {
  console.log("-- Logout");
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
  console.table(users);
});


/**
 * GET Entries
 */
apiRouter.get('/entries', async (req, res) => {
  console.log("--- Create Entry")
  console.table(entries)
  return res.send( { entries: entries})
})


/**
 * CREATE Entries
 */
apiRouter.post('/entry', async (req, res) => {
  console.log("--- Create Entry")
  /**
   *   {
   *     date: "2024-11-12",
   *     time: "12:20",
   *     location: "Library",
   *     type: "Patrol",
   *     notes: "Completed routine patrol of the library; no incidents noted.",
   *     author: "Maximiliano"
   *   }
   */

  const validationChecks = [
    { valid: req.body.id, message: "ID cannot be an empty string" },
    { valid: req.body.date, message: "Date cannot be an empty string" },
    { valid: req.body.time, message: "Time cannot be an empty string" },
    { valid: req.body.location, message: "Location cannot be an empty string" },
    { valid: req.body.type, message: "Type cannot be an empty string" },
    { valid: req.body.notes, message: "Notes cannot be an empty string" },
    { valid: req.body.author, message: "Author cannot be an empty string" }
  ]

  for (let check of validationChecks) {
    if (!check.valid) {
      return sendResponseWithMessage( { res: res, message: check.message })
    }
  }

  const newEntry = {
    id: req.body.id,
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    type: req.body.type,
    notes: req.body.notes,
    author: req.body.author
  }

  entries.push(newEntry)
  entries.sort((a, b) =>
      new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`)
  );
  console.table(entries)
  return res.send({ entries: entries })
})

/**
 * DELETE Entries
 */
apiRouter.delete('/entry', async (req, res) => {
  
})


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
