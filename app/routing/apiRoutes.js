var friendList = require('../data/friend.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
    res.json(friendList);
  });

//   would need to write something along the lines of 
//  app.post('/app/friends', function(req,res){
//   
};