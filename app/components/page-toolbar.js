import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service(),
  router: service(),
  tagName: "",
  actions: {
    logout(e) {
      e.preventDefault();
      this.get("session").invalidate();
    },
    login(e) {
      e.preventDefault();
      this.get("router").transitionTo("magic-link");
    }
  }
});
