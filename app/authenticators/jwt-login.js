import jwt from "ember-simple-auth-token/authenticators/jwt";

export default jwt.extend({
  authenticate(token) {
    return new Promise((resolve, reject) => {
      this.refreshAccessToken(token)
        .then(response => {
          let tokenData = this.handleAuthResponse(response);
          resolve(tokenData);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
});
