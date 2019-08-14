const express = require('express')
const auth = require('../../config/middleware')
const Room = require('../../models/room')

const router = express.Router()

/* GET ALL ROOMS */
router.get('/', auth,  function(req, res) {
  Room.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  });
});

/* GET SINGLE ROOM BY ID */
router.get('/:id', auth, function(req, res, next) {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  });
});

/* SAVE ROOM */
router.post('/', auth, function(req, res, next) {
  Room.create(req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  });
});

/* UPDATE ROOM */
router.put('/:id',auth, function(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  });
});

/* DELETE ROOM */
router.delete('/:id',auth, function(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  });
});


module.exports = router
