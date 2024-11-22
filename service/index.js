require('dotenv').config();
const express = require('express');
const app = express();
const uuid = require('uuid');
const cors = require('cors');
const axios = require('axios');
const { MongoClient } = require('mongodb');

// Connect to the database cluster
const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}`
const client = new MongoClient(url);
const db = client.db('gatekeeper');
const usersCollection = db.collection('users');
usersCollection.createIndex({ username: 1 }, { unique: true }) // to make sure the usernames are not repeated
const entriesCollection = db.collection('entries');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log('✅  Connected to DB!');
})().catch((ex) => {
  console.log(`❌Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});


const apiKey = process.env.OPENWEATHER_API_KEY;
const baseURL = process.env.VITE_BACKEND_API_BASE_URL
console.log(`apiKey = ${apiKey}`)
console.log(`baseURL = ${baseURL}`)

// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// let users = {}
// let entries = [
//   {
//     id: "123",
//     date: "2024-11-12",
//     time: "12:20",
//     location: "Library",
//     type: "Patrol",
//     notes: "Completed routine patrol of the library; no incidents noted.",
//     author: "Maximiliano"
//   }
// ]

app.use(cors());
//make sure to parse the body from json
app.use(express.json());

const apiRouter = express.Router();
app.use(`/api`, apiRouter);


// Serve up the static content
app.use(express.static('dist'));


// Login
// Expecting object like:
// {
//    "password": String,
//    "username": String
// }
apiRouter.post('/auth/login', async (req, res) => {
  console.log("-- Login");

  try {
    const token = uuid.v4()
    const updatedUser = await usersCollection.findOneAndUpdate(
        { username: req.body.username, password: req.body.password },
        { $set: { token: token} },
        { returnDocument: "after" }
    )

    if (updatedUser) {
      return res.send({ token: updatedUser.token, firstName: updatedUser.firstName, lastName: updatedUser.lastName });
    } else { // no element that matched that username and password was found
      console.log("Unauthorized")
      return res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).send({ msg: 'The server had an internal error' });
  }
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
    { valid: req.body.lastName, message: "Last name cannot be an empty string" }
  ]

  for (let check of validationChecks) {
    if (!check.valid) {
      console.log(check.message)
      return sendResponseWithMessage( { res: res, message: check.message })
    }
  }

    const newUser = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      token: uuid.v4()
    };

    try {
      await usersCollection.insertOne(newUser);
      res.send( { token: newUser.token } );
    } catch (error) {
      if (error.errorResponse.code === 11000) {
        let errorMessage = "The username is already taken."
        return sendResponseWithMessage( { res: res, message: errorMessage })
      }

      res.status(500).send({ msg: 'The server could not connect with the DB.' });
    }
})


// Logout
// Expecting object like:
// {
//   "token": String
// }
apiRouter.delete('/auth/logout', async (req, res) => {
  console.log("-- Logout");
  try {
    await usersCollection.updateOne(
        { token: req.body.token },
        { $set: { token: null } } //TODO: "" or null?
    )
    res.status(204).send()
  } catch (error) {
    res.status(500).send({ msg: 'The server had a problem.' });
  }
});


/**
 * GET Entries
 */
apiRouter.get('/entries', authenticateToken, (req, res) => {
  console.log("--- Get Entries")
  console.table(entries)
  return res.send( { entries: entries})
})


/**
 * CREATE Entries
 */
apiRouter.post('/entry', authenticateToken, (req, res) => {
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

apiRouter.post('/weather', authenticateToken, (req, res) => {

})

/**
 * DELETE Entries
 */
apiRouter.delete('/entry', authenticateToken, (req, res) => {
  console.log("--- Delete Entry")
  if (!req.body.id) {
    return sendResponseWithMessage( { res: res, message: "ID cannot be empty" })
  }
  const updatedEntries = deleteEntryById(req.body.id)
  if (updatedEntries.length+1 !== entries.length) {
    console.table(entries)
    return sendResponseWithMessage( { res: res, message: "No element was removed" })
  }

  entries = updatedEntries
  res.send( { entries: entries })
  console.table(entries)
})

/**
 * Get Weather
 * /api/weather
 * Required: auth token
 */
apiRouter.get('/weather', authenticateToken, async (req, res) => {
  console.log("--- Get Weather")
  try {
    const weatherApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=40.233845&lon=-111.658531&appid=${apiKey}&units=imperial`
    const response = await axios.get(weatherApiURL)
    return res.send(response.data)
  } catch(error) {
    console.error(error)
    return res.status(500).send({ error: "The server had an unexpected error." })
  }
})


// // Provide the version of the application
// app.get('/config', (_req, res) => {
//   res.send({ version: '20221228.075705.1', name: serviceName });
// });
//
// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} - http://localhost:${port}`);
});

function sendResponseWithMessage( { res, message, status = 400 } ) {
  res.status(status).send({ message: message });
}

function deleteEntryById(id) {
  return entries.filter(entry => entry.id !== id);
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log("Access token required")
    return res.status(401).send({ message: "Access token required" });
  }

  // Check if the token exists in a user (simple verification in this example)
  const user = Object.values(users).find(user => user.token === token);

  if (!user) {
    console.log("Invalid or expired token")
    return res.status(403).send({ message: "Invalid or expired token" });
  }

  req.user = user;
  next();
}
