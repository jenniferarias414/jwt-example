const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET

const generateToken = (info) => {
  return jwt.sign(
      //info we want to use for encoding {}
      //secret -stored in server ""
      //options {}
    {
      username: info.username,
      email: info.email
    },
    SECRET,
    {
      expiresIn: '5 minutes' //or leave blank/don't include to never expire
    }
  )
}


  const createToken = async (req, res) => {
    console.log(req.body)
    let token = generateToken(req.body)
    res.status(200).send(token)
  }

   const validateToken = async (req, res) => {
    let token = req.get('Authorization')
    let valid = jwt.verify(token, SECRET)

    if (valid) {
      res.status(200).send('success')
    } else {
      res.status(400).send('invalid')
    }
    console.log(req.body)
  }

  module.exports={createToken, validateToken}
