/* eslint-env node */

"use strict";

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ["DS_HOST"],
    fastbootAllowedKeys: [],
    failOnMissingKey: false
  };
};
