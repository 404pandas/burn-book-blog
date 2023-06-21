// path
const path = require("path");
// express
const express = require("express");
// express session
const session = require("express-session");
// handlebars
const exphbs = require("express-handlebars");
// helpers
const helpers = require("./utils/helpers");
// app express
const app = express();
// port
const PORT = 3001 || process.env.PORT;
// sequalize db config
const sequelize = require("./config/config");
// sequelize store (connect-session-sequelize)
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// sess
const sess = {
  secret: "iwanttobelieve",
  cookie: {
    // max age
    maxAge: 6000000,
    // httponly
    httpOnly: true,
    // secure
    secure: false,
    // samesite
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// app.use session
app.use(session(sess));

// hbs format date
const hbs = exphbs.create({ helpers });

// app.engine for hbs
app.engine("handlebars", hbs.engine);

// app.set for hbs
app.set("view engine", "handlebars");

// app.use json
app.use(express.json());

// app.use urlencoded
app.use(express.urlencoded({ extended: false }));

// app.use static
app.use(express.static(path.join(__dirname, "public")));
// require controllers
app.use(require("./controllers/"));
// app.listen
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT} - http://localhost:${PORT}`);
  sequelize.sync({ force: false });
});
