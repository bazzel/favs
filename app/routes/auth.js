import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  //currentUser: service(),
  async model({ token }) {
    let authenticator = "authenticator:jwt-login";
    await this.get("session").authenticate(authenticator, token);
    this.transitionTo("logged-in");
  }
});
