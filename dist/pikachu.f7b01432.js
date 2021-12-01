// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.skin *::before,\n.skin *::after {\n  box-sizing: border-box;\n}\n\n.skin {\n  background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n\n.nose {\n  border-top: 8px solid #000000;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.nose .arc {\n  position: absolute;\n  background-color: #000000;\n  height: 5px;\n  width: 20px;\n  top: -13px;\n  left: -10px;\n  border-top-left-radius: 10px 5px;\n  border-top-right-radius: 10px 5px;\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  67% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.nose:hover {\n  animation: shake 250ms infinite linear;\n}\n\n.eye {\n  border: 3px solid #000000;\n  border-radius: 50%;\n  height: 64px;\n  width: 64px;\n  position: absolute;\n  top: 160px;\n  left: 50%;\n  margin-left: -32px;\n  background: #2e2e2e;\n}\n\n.eye::after {\n  content: \"\";\n  display: block;\n  border: 3px solid #000000;\n  width: 32px;\n  height: 32px;\n  background: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  left: 6px;\n  top: -1px;\n}\n\n.eye.left {\n  transform: translateX(-120px);\n}\n\n.eye.right {\n  transform: translateX(120px);\n}\n\n.mouth {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  left: 50%;\n  margin-left: -100px;\n  top: 230px;\n  overflow: hidden;\n}\n\n.mouth .up {\n  position: relative;\n  top: -3px;\n  z-index: 1;\n}\n\n.mouth .up .lip {\n  border: 3px solid #000000;\n  border-top: none;\n  width: 88px;\n  height: 25px;\n  position: absolute;\n  top: 0;\n  left: auto;\n  background: #ffe600;\n  box-shadow: 0 -10px 0 #ffe600;\n}\n\n.mouth .up .lip.left {\n  border-right: none;\n  border-bottom-left-radius: 44px 25px;\n  transform: rotate(-25deg);\n  right: 50%;\n}\n\n.mouth .up .lip.right {\n  border-left: none;\n  border-bottom-right-radius: 44px 25px;\n  transform: rotate(25deg);\n  left: 50%;\n}\n\n.mouth .down {\n  width: 180px;\n  height: 800px;\n  border: 4px solid #000000;\n  position: absolute;\n  top: -630px;\n  left: 50%;\n  margin-left: -90px;\n  border-radius: 50% 50%;\n  background: #9b000a;\n  overflow: hidden;\n}\n\n.mouth .down .tongue {\n  width: 180px;\n  height: 200px;\n  position: absolute;\n  bottom: -64px;\n  left: 50%;\n  margin-left: -90px;\n  border-radius: 50%;\n  background: #ff485f;\n}\n\n.face {\n  position: absolute;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  left: 50%;\n  top: 270px;\n  margin-left: -44px;\n  background: #ff0000;\n}\n\n.face.left {\n  transform: translateX(-166px);\n}\n\n.face.right {\n  transform: translateX(166px);\n}\n";

exports.default = string;
},{}],"3THh":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["3THh"], null)
//# sourceMappingURL=pikachu.f7b01432.map