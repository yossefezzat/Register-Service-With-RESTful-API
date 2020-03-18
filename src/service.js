import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import RegisterRoutes from './Api/RegisterRoutes';

const app = express();
const PORT = config.get("app.port");
const databaseUrl = config.get("database.url");


// Middleware to add header to response of the any request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization,x-api-key");
    next();
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.Promise = global.Promise;
mongoose.connect(databaseUrl ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


RegisterRoutes(app);

app.get('/' , (req , res) => {
    res.send("hellllo here is api");
})

app.listen(PORT , ()=> 
    console.log("hello")
)