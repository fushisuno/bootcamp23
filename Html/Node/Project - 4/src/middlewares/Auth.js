
module.exports = {
  private: async (req, res, next) => {
    if(!req.query.token && !req.body.token){
      res.json({notalowed: true})
      return;
    }
    let token = '';
    if(req.body.token){
      token = req.body.token;
    }
    if(req.query.token){
      token = req.query.token;
    }

    if(token == ''){
      res.json({notalowed: true})
      return;
    }

    /*
    let user = await User.findOne({token});
    if(!user){
      res.json({notalowed: true})
      return;
    }
    */
   
    next();
  }
}