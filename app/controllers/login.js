import Controller from "@ember/controller";

export default Controller.extend({
  tokenRequested: false,
  actions: {
    requestToken() {
      let session = this.store.createRecord("session", this.model);

      session
        .save()
        .then(() => {
          this.set("tokenRequested", true);
        })
        .catch(e => {
          this.set("errors", session.get("errors"));
          session.deleteRecord();
        });
    }
  }
});
