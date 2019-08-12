const express = require('express')
const User = require('../../models/User')
const gravatar = require('gravatar')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const auth = require('../../config/middleware')

const router = express.Router()

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require ('../../validation/login')

router.post('/register', (req, res) => {
  const validation = validateRegisterInput(req.body)

  if (validation.error) return res.status(400).json({message: validation.error.details[0].message})

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ message: 'Email already exits' })
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
            .then((user) => {
              const dataUser = {
                avatar: user.avatar,
                date: user.date,
                email: user.email,
                name: user.name,
                id: user.id
              }
              res.json(dataUser)
            })
            .catch(err => console.log(err))
        })
      }
    })
})

router.post('/login', (req, res) => {
  const validationLogin = validateLoginInput(req.body)

  if (validationLogin.error) return res.status(400).json({ message: validationLogin.error.details[0].message })

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
          // web token
          // sign token
          if (isMatch) {
            const payload = { id: user.id, name: user.name, avatar: user.avatar }

            jwt.sign(payload, keys.secretOrKey, function (err, token) {
              res.json({
                success: true,
                token: token,
                data: payload
              })
            });
          } else {
            return res.status(400).json({ password: 'Password incorrect ' });
          }
        })
    })
})

// router.get('/list-users', auth, (req, res) => {
//   User.find({})
//     .then(listUsers => {
//       res.json({
//         listUsers,
//         total_length: listUsers.length
//       })
//     })
//     .catch(err => {
//       return res.status(404).json({ message: "error" })
//     })
// })

router.get('/account', auth, async (req, res) => {
  const currentUser = await User.findById(req.user.id).select('-password')
  res.json({
    data: currentUser
  })
})

module.exports = router
