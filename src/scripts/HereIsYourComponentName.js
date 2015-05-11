var _ = require("lodash");
var $ = require("jquery");

module.exports = {
  jqueryVersion: function() {
    return $.fn.jquery;
  },
  lodashVersion: function() {
    return _.VERSION;
  }
};
