import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  //currentUser: service(),
  model({ token }) {
    let authenticator = "authenticator:jwt-login";
    return this.get("session")
      .authenticate(authenticator, token)
      .then(_data => {
        this.transitionTo("logged-in");
      });
  }
});
