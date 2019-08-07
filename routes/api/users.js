const express = require('express');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/register', (req, res) => {
  if (req.body.name === '' || req.body.email === '' || req.body.password === '') {
    return res.status(400).json({message: "error"})
  }

  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        return res.status(400).json({message: 'Email already exits'})
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', // ratio
          d: 'mm' //default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        })

        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) throw err;
          newUser.password = hash
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      }
    })
})

router.get('/account', (req, res) => {
  res.json({
    message: 'hihi'
  })
})

module.exports = router
