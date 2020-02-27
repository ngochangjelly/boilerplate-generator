// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("beerDetail", "/beer/:id");
routes.add("test", "/test");
routes.add("/details", "/details/index");

export default routes;
