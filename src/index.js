import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:'./env'
})



connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT || 8000 ,()=>{
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }
)
.catch((err)=>{
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
})






















// import express from 'express';

// const app = express();
// // Connect to MongoDB
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log('Connected to MongoDB');

//         app.on("ERROR", (err)=>{
//               console.log(err);
//               throw err;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error('Failed to connect to MongoDB:', error);
//     }
// })()