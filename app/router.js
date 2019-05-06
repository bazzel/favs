import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("magic-link", { path: "/magic_link/new" });
  this.route("auth");

  this.route("logged-in", { path: "/" }, () => {});
});

export default Router;
