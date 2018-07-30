const router = require("express").Router();
const user = require("../models/users.js");
const comments = require("../models/users.js");

router.post("/api", function(req, res){
    console.log("hello");
    user.create(req.body).then(()=>{
        res.json(true);
    }).catch((err) => {
        res.json(err)
    });
});

 

router.get("/api/users", function(req,res){
    console.log("hello");
    user.find().then((docs)=>{res.json(docs);
    });
});


 router.get("/api/:id", function(req,res){
     console.log("hello")
      user.findOne({
          _id: req.params.id
     }).then((docs) => {
          res.json(docs);
       
      });
 });

   router.post("/api/:id/comments", function(req,res) {
      console.log("hello")
      user.findOneAndUpdate(
          
        {"Post": req.params.id}, {$push: {"comments": req.params.body}}
        
      ).then(()=>{
        res.json(true);
    }).catch((err) => {
        res.json(err)
    });
      console.log("working")
       .then(()=>{res.json(true);}).catch((err)=>{res.json(err)
      });
  });

//   router.post("/api/Post/:id/ratings", function(req,res){
//       console.log("please work")
//       user.Post.postRating.push(
       
//         {id: req.params.ObjectId}
//       )
//   })

  

 

module.exports = router;