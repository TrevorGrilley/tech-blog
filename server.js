const express = require('express');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'super top secret',
    cookie: {
        expires: 15 * 60 * 1000 
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Currently Listening ${PORT}!`));
  });