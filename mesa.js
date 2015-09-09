(function () {

  "use strict";

  function mesita() {

    var $main = document.getElementsByTagName("main")[0];
    var $tables = $main.getElementsByTagName("table");

    var maxMobileWidth = 720;

    function createParentContainer(el) {
      var parent = el.parentNode;
      var wrapper = document.createElement("div");
      wrapper.setAttribute("class", "table-container");
      parent.replaceChild(wrapper, el);
      wrapper.appendChild(el);
    }

    function addTableContainers() {
      var i = 0, len = $tables.length;
      for (; i < len; i++) {
        createParentContainer($tables[i]);
      }
    }

    // mesita init().
    (function () {
      if ((window.innerWidth < maxMobileWidth) && ($tables)) {
        addTableContainers();
      }
    }());


  }


  // Quickie DOM readiness check to initialize widget.
  if (!!(window.addEventListener)) {
    window.addEventListener("DOMContentLoaded", mesita);
  } else {
    window.attachEvent("onload", mesita);
  }

}());
