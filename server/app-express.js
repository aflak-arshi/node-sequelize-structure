const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

// ROUTES PATHS
const userRoutes = require('./apis/user/user.route');

const apiRouter = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(helmet());

app.use('/uploads', express.static('./server/uploads'));

// CORS Config
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Root Route
app.use(`/${process.env.APIVERSION}`, apiRouter);

// ROUTES CONFIG
apiRouter.use('/', userRoutes);


module.exports = app;