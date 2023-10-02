
module.exports ={
  getStates: async (req, res) =>{
    res.json({states: "Super"});
  },
  info: async (req, res) =>{

    return res.send('test');
  },
  editAction: async (req, res) =>{

  }
}