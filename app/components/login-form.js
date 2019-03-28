import Component from "@ember/component";

export default Component.extend({
  actions: {
    submitChanges() {
      console.log("submitChanges");
      this.onSubmit();
    }
  }
});
