var express = require('express');
var router = express.Router();

// define the workshops route
router.get('/workshops', function(req, res) {
  res.status(200).send('Workshops mini info');
});

// define the workshops/{id} route
router.get('/workshops/{id}', function(req, res) {
  res.status(200).send('single Workshop info');
});

// Create a resource for /heartbeat to test Express
router.get("/heartbeat", function (req, res) {
    res.status(200).send({heartbeat: 'workshops.js Still alive'});
});

module.exports = router;