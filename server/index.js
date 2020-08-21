const express = require('express')
const cors = require('cors')
const monk = require('monk')

const app = express()
// all incoming requests are coming through cors middleware
app.use(cors())
// body parser middleware
app.use(express.json())
//create a database
const db = monk(process.env.MONGO_URI || 'localhost/animlsgossip')
// create a collection
const anitters = db.get('anitters')

app.get('/', (req, res) => {
  res.json({
    message: 'Hey Aniters!'
  })
})

app.get('/ans', (req, res) => {
  anitters
    .find()
    .then(anitters => {
      res.json(anitters)
    })
})

function isValid(animal) {
  return animal.name && animal.name.toString().trim() !== '' && animal.name.toString().trim().length <= 50 &&
    animal.content && animal.content.toString().trim() !== '' && animal.content.toString().trim().length <= 140
}

app.post('/ans', (req, res) => {
  if (isValid(req.body)) {
    // crate a object
    const anms = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date()
    }
    // insert to database
    anitters.insert(anms)
      .then(createdAnimal => {
        res.json(createdAnimal)
      })
  } else {
    res.status(422)
    res.json({
      message: 'Hey! Name and Content are required! Name cannot be longer than 50 characters. Content cannot be longer than 140 characters.'
    })
  }
})

app.use((error, req, res, next) => {
  res.status(500);
  res.json({
    message: error.message
  });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serevr is listening on port ${PORT}`);
})