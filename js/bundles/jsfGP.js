var pageComponent =
webpackJsonppageComponent([8],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_2Soy = __webpack_require__(297);

var _step_2Soy2 = _interopRequireDefault(_step_2Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jsfGP = function (_Component) {
  _inherits(jsfGP, _Component);

  function jsfGP() {
    _classCallCheck(this, jsfGP);

    return _possibleConstructorReturn(this, (jsfGP.__proto__ || Object.getPrototypeOf(jsfGP)).apply(this, arguments));
  }

  return jsfGP;
}(_metalComponent2.default);

;

_metalSoy2.default.register(jsfGP, _step_2Soy2.default);

exports.default = jsfGP;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.jsfGP = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_2.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace jsfGP.
   * @public
   */

  goog.module('jsfGP.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param733 = function param733() {
      ie_open('h2');
      var dyn40 = opt_data.page.title;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h2');
      ie_open('p');
      itext('It\'s recommended that you have a fair amount of knowledge on ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext(', but it\'s not required.');
      ie_close('p');
      ie_open('p');
      itext('Flow.apex uses Func objects from R.apex, and a Func is actually a custom Apex object that mimics the behavior of a function.');
      ie_close('p');
      ie_open('p');
      itext('Here is how your implement a custom Func.');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloWorldFunc extends Func {\n    public HelloWorldFunc() {\n        super(0); // specify the number of arguments the Func takes\n    }\n\n    // Provide custom implementation for a Func that takes 0 arguments.\n    public override Object exec() {\n        return \'Hello World\';\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('And then you instantiate, and invoke it.');
      ie_close('p');
      $templateAlias2({ code: 'Func helloworld = new HelloWorldFunc();\nString msg = (String)helloworld.run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('To get deeper with Func objects, please check ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param733 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'jsfGP.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var jsfGP = function (_Component) {
  _inherits(jsfGP, _Component);

  function jsfGP() {
    _classCallCheck(this, jsfGP);

    return _possibleConstructorReturn(this, (jsfGP.__proto__ || Object.getPrototypeOf(jsfGP)).apply(this, arguments));
  }

  return jsfGP;
}(_metalComponent2.default);

_metalSoy2.default.register(jsfGP, templates);
exports.jsfGP = jsfGP;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);