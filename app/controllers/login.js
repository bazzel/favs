import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    login() {
      let session = this.store.createRecord("session", this.model);

      session
        .save()
        .then(() => {
          console.log("saved...");
          //this.transitionToRoute("show-warranty", warranty);
        })
        .catch(e => {
          console.log(e);
          session.deleteRecord();
          this.set("errors", session.get("errors"));
        });
    }
  }
});
