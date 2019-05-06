import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return "";
  },
  renderTemplate: function() {
    this.render("magic-link", { into: "layouts/magic-link" });
  }
});
