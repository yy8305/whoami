(function() {
  var $ = require("jquery");

  var jQuery = {
    install: function(Vue) {
      Vue.prototype.$jquery = $;
      Vue.$jquery = $;
    }
  };

  if (typeof exports == "object") {
    module.exports = jQuery;
  }

  if (typeof window !== "undefined") {
    window.$ = $;
    window.jquery = $;
  }
})();
