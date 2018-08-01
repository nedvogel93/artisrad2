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



router.post("/:id/newpost", function(req, res){
    console.log("hello", req.body);
    user.update({
        "_id": req.params.id},
        {"$push":
    {
        "Post":{
            "postName": req.body.postName,
            "postDescription": req.body.postDescription,
            "link": req.body.link
        }}
    }).then(()=>{
    res.json(true);
}).catch((err) => {
    res.json(err)
});
});

router.post("/:id/:Postid/comments", function(req,res){
    console.log("sasdasd", req.body.comments);
    
    user.update({
       "_id": req.params.id, "Post._id":req.params.Postid
    },
    {"$push":
{"Post.$.comments": req.body.comments}
   
}
    )
.then(()=>{
    res.json(true);
}).catch((err) => {
    res.json(err)
});
});

router.post("/:id/:Postid/rating", function(req,res){
    console.log("sasdasd");
    user.update({
       "_id": req.params.id, "Post._id":req.params.Postid
    },
    {"$push":
{"Post.$.postRating": req.body.postRating}
    
    })
.then(()=>{
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

<<<<<<< HEAD
 var demoObject=[{
        name:"Brian",
        password:"yourbitchcantdrive",
        post:[{
            postName:"ducks on a pond",
            postRating:7,
            postDescription:"ducks peacefully on a pond",
            link:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-duck-pond-mindy-newman.jpg",
            comments:[{
                comment:"Really like those ducks!",
            },
        {
                comment:"Duck on a pond. Genius!"
        },
    {
                coment:"Could stare at it for hours"
    }]
        }]
 }]

 router.get('/fakePath',(req,res)=>{
    
     res.send(demoObject)
 })

=======
 router.get("/api/:id/:postId", function (req,res){
     user.findOne({"_id": req.params.id, "Post._id":req.params.Postid}).then((docs) => {
        res.json(docs);
     
    });
 });
>>>>>>> nuuuubranch

 
//    router.post("/api/:id/comments", function(req,res) {
//       console.log("hello")
//       user.findOneAndUpdate(
          
     //   {"Post": req.params.id}, {$push: {"comments": req.params.body}}
        
//       ).then(()=>{
//         res.json(true);
//     }).catch((err) => {
//         res.json(err)
//     });
//       console.log("working")
//        .then(()=>{res.json(true);}).catch((err)=>{res.json(err)
//       });
//   });

//   router.post("/api/Post/:id/ratings", function(req,res){
//       console.log("please work")
//       user.Post.postRating.push(
       
//         {id: req.params.ObjectId}
//       )
//   })

  

 

module.exports = router;