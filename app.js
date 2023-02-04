const express= require("express");
const  bodyParser =require("body-Parser");
const request= require("request");

const app= express();
app.use(express.static("public"));
//this is a express module used to read an external file/folder

app.use(bodyParser.urlencoded({extended:true}));
//app.use means we are telling the module to use bodyParser
// it will give us all the details form the from
app.get("/",function (req,res) {
 res.sendFile(__dirname+"/signUp.html");

 })

 app.post("/",function(req,res){
   var firstName= req.body.fname;
   var lastName= req.body.lname;
   var email= req.body.email

   console.log(firstName, lastName, email);

   // lets make a javascript object and inside js object we'll insert the data we want to save in mailchimp
               // const data= {
               //   member:[{
               //     email_address : email,
               //     status : "subscribed",
               //     merged_field:{
               //       FNAME: firstName,
               //       LNAME:lastName,
               //        }
               //     }
               //   ]
               //
               // };
               // const jsondata=JSON.stringify(data);
               //


app.listen(3000,function () {
        console.log("Server is running on port 3000");
})


// API
// mailchimp.com
// f39525aaa200af00f0ad6fe7d18bc546-us21

//unique list_id : 1c311e4602
//it was hard to find;
