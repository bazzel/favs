import Controller from "@ember/controller";
import fetch from "fetch";

export default Controller.extend({
  tokenRequested: false,
  actions: {
    requestToken() {
      this._postData()
        .then(res => {
          this.set("tokenRequested", true);
        })
        .catch(e => {
          const errs = e.errors.map(err => err.detail);
          this.set("errors", errs);
          console.error(errs);
        });
    }
  },
  _postData() {
    const url = "http://localhost:3000/sessions";
    const data = { email: this.model.email };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      let json = res.json();
      if (res.ok) {
        return json;
      } else {
        return json.then(err => {
          throw err;
        });
      }
    });
  }
});
