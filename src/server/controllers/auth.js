const jwt = require('jsonwebtoken')

const generateToken = () => {

}

module.exports = {
  createToken: async (req, res) => {
    console.log(req.body)
  },

  validateToken: async (req, res) => {
    console.log(req.body)
  },
}