const User = require('../models/User')

module.exports = {
  async get(req, res) {
    const users = await User.findAll()

    return res.json(users)
  },
  
  async store(req, res) {
    const { name, email } = req.body
    
    const user = await User.findOne({ where: { email } })
  
    if(!user) {
      await User.create({name, email})

      return res.status(201).json({ message: 'Dados inseridos' })
    }

    return res.status(409).json({ message: 'Usuário já existe' })
  }
}
