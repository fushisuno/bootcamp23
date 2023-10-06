
module.exports = {
  private: async (req, res, next) => {
    if(!req.session.sessionUser){
      res.json({notalowed: true})
      return;
    }
    let token = req.session.sessionUser
    console.log(token)
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