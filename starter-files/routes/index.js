const express = require('express');
const router = express.Router();
const storeController = require("../controllers/storeController");
const { catchErrors } = require("../handlers/errorHandlers");

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post("/add", catchErrors(storeController.createStore));

// Reverse name param and print on screen
router.get('/reverse/:name', ( req, res ) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
