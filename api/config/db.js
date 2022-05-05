const mongoose = require('mongoose')

//Database connection
const connectDb = async() => {
    await mongoose.connect( "mongodb://localhost:27017/pfn_blog_data",
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // useFindAndModify: false,
         // useCreateIndex: true
       },(err) => {
         if (err){
           console.log("Error connecting to database... " + err)
         }else{
           console.log("Database connection succesful!")
         }
       }
     );
   
   }
   module.exports = connectDb