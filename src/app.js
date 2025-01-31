import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cors({
    credentials: true,
    origin:process.env.CORS_ORIGIN, // replace with your frontend URL
}));
app.use(cookieParser());
app.use(express.json({
    limit: '50mb', 
}));
app.use(express.urlencoded({
    extended:true,
    limit: '50mb', 
}));
app.use(express.static("public"));
export {app}