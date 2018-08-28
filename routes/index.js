const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/add-location', (req, res, next) => {
  res.render('add-location');
});

router.post('/add-location', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.latitude ,req.body.longitude]
  };
  const { name, type } = req.body;
console.log(location)
  // Save the Place to the Database
  const newPlace = new Place({ name, type, location })

  newPlace.save()
    .then(result => {
      res.redirect('/');

    })
    .catch(error => {
      console.log(error)

    })
});


router.get('/map', (req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.render('places/index', { places });
    }
  })
})

module.exports = router;
