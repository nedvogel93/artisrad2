const router = require("express").Router();
const user = require("../models/users.js");
const comments = require("../models/users.js");

router.post("/api", function(req, res){
    console.log("justin",req.body);
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

router.post('/submit',(req,res)=>{
    console.log('i fuckin hate you')
    // var pulledUsers=[];
    //console.log("talk to me you fuck!!!")
    var submittedUser=req.body.userName
    user.find().then((docs)=>{
        for(var i=0;i<docs.length;i++){
            if (submittedUser === docs[i].userName){
                console.log("found")
                res.send(docs[i], "hello")
                
            }
            else{
                console.log("nope!")
            }
        }
        
})
    //    console.log("Pulled users: " +pulledUsers)
    //    console.log("Submitted" + submittedUser)
 
    
//   var indexOfUser= users.findIndex(i => i.name === submittedUser.name);
  
//   if(submittedUser.password === users[indexOfUser].password){
  /*if (req.body.userName === "bryan" && req.body.password === "password"){

  
  console.log(submittedUser.password);
  console.log('nailed it!')
  loggedIn=true;
  } 
  else{loggedIn=false;} */
  
  
  });

//   router.get('/submit',(req,res)=>{
//       res.send(user)
//   })
 

 

//  var demoObject=[{
//         name:"Brian",
//         password:"yourbitchcantdrive",
//         post:[{
//             postName:"ducks on a pond",
//             postRating:7,
//             postDescription:"ducks peacefully on a pond",
//             link:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-duck-pond-mindy-newman.jpg",
//             comments:[{
//                 comment:"Really like those ducks!",
//             },
//         {
//                 comment:"Duck on a pond. Genius!"
//         },
//     {
//                 coment:"Could stare at it for hours"
//     }]
//         }]
//  }]

//  router.get('/fakePath',(req,res)=>{
    
//      res.send(demoObject)
//  })


 
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