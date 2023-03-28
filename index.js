const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const taskRoute = require('./routes/task')
const path = require('path')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const corsOptions = {
    origin: 'http://localhost:8081'
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());

// global middleware

const PORT = 8080;

app.use("/",authRoute)
app.use("/",userRoute)
app.use("/",taskRoute)




// server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

