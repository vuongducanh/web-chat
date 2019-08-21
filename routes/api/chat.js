const express = require('express')
const auth = require('../../config/middleware')
const Chat = require('../../models/chat')
var server = require('http').createServer(express)
const io = require('socket.io')(server)
server.listen(8000);

io.on('connection', function (socket) {
  console.log('User connected')
  socket.on('disconnect', function() {
    console.log('User disconnected')
  });
  socket.on('save-message', function (data) {
    io.emit('new-message', { message: data })
  })
})

const router = express.Router()

/* GET ALL CHATS */
router.get('/:roomid', function(req, res, next) {
  Chat.find({ room: req.params.roomid }, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CHAT BY ID */
router.get('/:id', auth, function(req, res, next) {
  Chat.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CHAT */
router.post('/', auth, function(req, res, next) {
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHAT */
router.put('/:id', auth, function(req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHAT */
router.delete('/:id', auth, function(req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router
