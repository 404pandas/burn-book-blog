// path
const path = require("path");
// express
const express = require("express");
// express session
const session = require("express-session");
// handlebars

// helpers

// app express
const app = express();
// port
const PORT = 3001 || process.env.PORT;
// sequalize db config
// sequelize store (connect-session-sequelize)
const SequelizeStore = require("connect-session-sequelize")(
  connect.session.Store
);

// sess
var sess = {
  secret: "super secret alien",
  cookie: {
    // max age
    maxAge: 60000,
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

// hbs

// app.engine for hbs

// app.set for hbs

// app.use json
app.use(express.json());

// app.use urlencoded
app.use(express.urlencoded({ extended: false }));

// app.use static
app.use(express.static(path.join(__dirname, "public")));
// require controllers

// app.listen
app.listen(PORT, () => {
  console.log(`"App listening on port: ${PORT} - http://localhost:${PORT}"`);
});
