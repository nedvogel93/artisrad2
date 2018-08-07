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
    // user.find().then((docs)=>{res.json(demoObject);
    res.send(demoObject)
    });



router.get("/api/:id", function(req,res){
     console.log("hello")
      user.findOne({
          _id: req.params.id
     }).then((docs) => {
          res.json(docs);
       
      });
 });




 var demoObject=[{
        userName:"Bryan",
        password:"password",
        Post:[{
            postName:"Ducks on a Pond",
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
                comment:"Could stare at it for hours"
    }]
        }]
 },
 {
    userName:"Justin",
    password:"password",
    Post:[{
        postName:"Mona Lisa",
        postRating:7,
        postDescription:"ducks peacefully on a pond",
        link:"https://cdn.britannica.com/300x500/24/189624-131-BAF1184D.jpg",
        comments:[{
            comment:"Really like those ducks!",
        },
    {
            comment:"Duck on a pond. Genius!"
    },
{
            comment:"Could stare at it for hours"
}]
    }]
},
{
    userName:"Ji",
    password:"password",
    Post:[{
        postName:"Ducks on a Pond",
        postRating:7,
        postDescription:"ducks peacefully on a pond",
        link:"http://images4.alphacoders.com/955/95578.jpg",
        comments:[{
            comment:"Really like those ducks!",
        },
    {
            comment:"Duck on a pond. Genius!"
    },
{
            comment:"Could stare at it for hours"
}]
    }]
},
{
userName:"Ned",
password:"password",
Post:[{
    postName:"The Last Supper",
    postRating:7,
    postDescription:"ducks peacefully on a pond",
    link:"https://images-na.ssl-images-amazon.com/images/I/71U4WPakgqL._SL1000_.jpg",
    comments:[{
        comment:"Really like those ducks!",
    },
{
        comment:"Duck on a pond. Genius!"
},
{
        comment:"Could stare at it for hours"
}]
}]
}]

 router.get('/catalogue',(req,res)=>{
    
     res.send(demoObject)
 })


 router.get("/api/:id/:postId", function (req,res){
     user.findOne({"_id": req.params.id, "Post._id":req.params.Postid}).then((docs) => {
        res.json(docs);
     
    });
 });

 
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