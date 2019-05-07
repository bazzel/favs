import Controller from "@ember/controller";
import fetch from "fetch";
import ENV from "../config/environment";

export default Controller.extend({
  tokenRequested: false,
  actions: {
    async requestToken() {
      try {
        await this._postData();
        this.set("tokenRequested", true);
      } catch (e) {
        this.set("errors", e.errors.map(err => err.detail));
      }
    }
  },
  async _postData() {
    const url = `${ENV.DS.host}/magic_link`;
    const data = { email: this.model };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const json = await response.json();
      throw json;
    }
  }
});
