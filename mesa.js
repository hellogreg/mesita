(function () {

  "use strict";

  function micromesa() {

    var $tables = document.getElementsByTagName("table");

    var maxMobileWidth = 720;

    function createContainer(el) {
      var parent = el.parentNode;
      var wrapper = document.createElement("div");
      wrapper.setAttribute("class", "table-container");
      parent.replaceChild(wrapper, el);
      wrapper.appendChild(el);
    }

    function addTableContainers() {
      var i = 0, len = $tables.length;
      for (; i < len; i++) {
        createContainer($tables[i]);
      }
    }


    (function () {
      if ((window.innerWidth < maxMobileWidth) && ($tables)) {
        addTableContainers();
      }
    }());


  }


  // Quickie DOM readiness check to initialize widget.
  if (!!(window.addEventListener)) {
    window.addEventListener("DOMContentLoaded", micromesa);
  } else {
    window.attachEvent("onload", micromesa);
  }

}());