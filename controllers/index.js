// express router
const router = require("express").Router();
// api routes
const apiRouters = require("./api");
// home routes
const homeRoutes = require("./home-routes");
// dashboard routes
const dashboardRoutes = require("./dashboard-routes");
// router.use home
router.use("/", homeRoutes);
// router.use dashboard
router.use("/dashboard", dashboardRoutes);
// router.use api
router.use("/api", apiRouters);
// export router
module.exports = router;
