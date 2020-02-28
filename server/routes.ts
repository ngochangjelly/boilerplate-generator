// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
<<<<<<< Updated upstream
routes.add("details", "/beer");
=======
routes.add("beerDetail", "/beer/:id");
routes.add("test", "/test");
routes.add("/details", "/details/index");
routes.add("/beer", "Details");
routes.add("/details", "Details");

>>>>>>> Stashed changes
export default routes;
