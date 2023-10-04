const User = require('../models/User');

module.exports ={
  getStates: async (req, res) =>{
    res.json({states: "Super"});
  },
  info: async (req, res) =>{
    const user = await User.findUserToken(req.query.token);
    res.json({user});
  },
  editAction: async (req, res) =>{

  }
}