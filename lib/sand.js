(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-look"), require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define("sand", ["react-look", "react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["sand"] = factory(require("react-look"), require("react"), require("prop-types"));
	else
		root["sand"] = factory(root["react-look"], root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var primary = exports.primary = '#34495E',
    primaryDarker = exports.primaryDarker = '#2C3E50',
    secondary = exports.secondary = '#1ABC9C',
    secondaryDarker = exports.secondaryDarker = '#16A085',
    font = exports.font = '#02222B',
    white = exports.white = '#FFF',
    lightGray = exports.lightGray = '#EEEEEE',
    green = exports.green = '#53DF83',
    navy = exports.navy = '#074354',
    orange = exports.orange = '#F69C00',
    yellow = exports.yellow = '#F5C700',
    red = exports.red = '#EF4836',
    blue = exports.blue = '#47D2E9',
    gray = exports.gray = '#bdc3c7';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = __webpack_require__(15);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Box2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(19);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dropdown = __webpack_require__(21);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dropdown2.default; /* A list of buttons, this is NOT the same as Select component */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navbar = __webpack_require__(27);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Navbar2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProgressBar = __webpack_require__(29);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProgressBar2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Select = __webpack_require__(31);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Select2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slider = __webpack_require__(33);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Slider2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tags = __webpack_require__(35);

var _Tags2 = _interopRequireDefault(_Tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tags2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextInput = __webpack_require__(37);

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextInput2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactLook = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIProvider = function (_Component) {
  _inherits(UIProvider, _Component);

  function UIProvider() {
    _classCallCheck(this, UIProvider);

    return _possibleConstructorReturn(this, (UIProvider.__proto__ || Object.getPrototypeOf(UIProvider)).apply(this, arguments));
  }

  _createClass(UIProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactLook.LookRoot,
        _extends({}, this.props, { config: _reactLook.Presets['react-dom'] }),
        this.props.children
      );
    }
  }]);

  return UIProvider;
}(_react.Component);

exports.default = UIProvider;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(16);

var _styles2 = _interopRequireDefault(_styles);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        this.props.children
      );
    }
  }]);

  return Box;
}(_react.Component);

exports.default = (0, _reactLook2.default)(Box);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
  fontSize: 16,
  display: 'block',
  backgroundImage: 'none',
  backgroundColor: _colors.white,
  minWidth: 300
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(18);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          type = _props.type;

      var passedProps = _extends({}, this.props);
      delete passedProps.link;

      if (link) {
        return _react2.default.createElement(
          'a',
          _extends({}, passedProps, { href: link, className: _styles2.default[type], role: 'button' }),
          this.props.children
        );
      }
      return _react2.default.createElement(
        'button',
        _extends({}, this.props, { className: _styles2.default[type] }),
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  type: _propTypes2.default.string,
  style: _propTypes2.default.object,
  link: _propTypes2.default.string
};

Button.defaultProps = {
  type: 'active'
};

exports.default = (0, _reactLook2.default)(Button);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(2);

var colors = _interopRequireWildcard(_colors);

var _reactLook = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function buttonGenerator(backgroundColor, borderColor) {
  var otherStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  borderColor = borderColor || backgroundColor;
  return Object.assign({}, {
    display: 'flex',
    border: '3px solid ' + borderColor,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontSize: '1.15rem',
    cursor: 'pointer',
    padding: '0.07rem 0.15rem',
    color: '#FFF',
    textDecoration: 'none',
    transition: 'opacity 0.25s linear',
    backgroundColor: backgroundColor,
    ':hover': {
      opacity: 0.8
    },
    ':focus': {
      outline: 'none'
    },
    ':active': {
      opacity: 2
    }
  }, otherStyles);
}

exports.default = _reactLook.StyleSheet.create({
  active: buttonGenerator(colors.secondary),
  success: buttonGenerator(colors.green),
  warning: buttonGenerator(colors.yellow),
  danger: buttonGenerator(colors.red),
  inverse: buttonGenerator(colors.primary),
  disabled: buttonGenerator(colors.gray, colors.gray, { cursor: 'default' }),
  info: buttonGenerator(colors.blue)
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(20);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox(props) {
		_classCallCheck(this, Checkbox);

		var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

		_this.state = {
			checked: _this.props.checked
		};

		_this.handleCheckbox = _this.handleCheckbox.bind(_this);
		_this.setStyles = _this.setStyles.bind(_this);
		return _this;
	}

	_createClass(Checkbox, [{
		key: 'setStyles',
		value: function setStyles() {
			if (this.state.checked) {
				if (this.props.disabled) return _styles2.default.disabledChecked;
				return _styles2.default.active;
			} else {
				if (this.props.disabled) return _styles2.default.disabled;
				return _styles2.default.inactive;
			}
		}
	}, {
		key: 'handleCheckbox',
		value: function handleCheckbox(event) {
			this.setState({
				checked: !!event.target.checked
			});
			if (this.props.onChange) this.props.onChange(this.state.checked);
		}
	}, {
		key: 'render',
		value: function render() {
			var name = this.props.name;


			return _react2.default.createElement(
				'label',
				{ htmlFor: name, className: _styles2.default.wrapper },
				_react2.default.createElement('input', _extends({}, this.props, { className: this.setStyles(), checked: this.state.checked, id: name, type: 'checkbox', onChange: this.handleCheckbox })),
				_react2.default.createElement(
					'span',
					{ className: _styles2.default.text },
					name
				)
			);
		}
	}]);

	return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
	name: _propTypes2.default.string.isRequired,
	checked: _propTypes2.default.bool,
	onChange: _propTypes2.default.function
};

Checkbox.defaultProps = {
	value: 'on',
	checked: false
};

exports.default = (0, _reactLook2.default)(Checkbox);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

function checkboxGenerator(backgroundColor) {
	var otherStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return Object.assign({}, {
		appearance: 'none',
		outline: 'none',
		width: 20,
		height: 20,
		borderRadius: 5,
		cursor: 'pointer',
		backgroundColor: backgroundColor,
		fontSize: 16,
		transition: 'background-color 0.25s linear'
	}, otherStyles);
}
exports.default = _reactLook.StyleSheet.create({
	wrapper: {
		margin: '7px 15px',
		color: _colors.font,
		fontSize: 16,
		minHeight: 30,
		display: 'block'
	},
	active: checkboxGenerator(_colors.secondary, {
		':after': {
			position: 'absolute',
			content: '"✓"',
			color: _colors.white,
			marginLeft: 5,
			marginTop: 2,
			fontSize: 12
		}
	}),
	inactive: checkboxGenerator(_colors.gray),
	disabled: checkboxGenerator(_colors.gray, {
		cursor: 'default'
	}),
	disabledChecked: checkboxGenerator(_colors.gray, {
		cursor: 'default',
		':after': {
			position: 'absolute',
			content: '"✓"',
			color: _colors.white,
			marginLeft: 5,
			marginTop: 2,
			fontSize: 12
		}
	}),
	text: {
		position: 'relative',
		top: -8
	}
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(22);

var _styles2 = _interopRequireDefault(_styles);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
	_inherits(Dropdown, _Component);

	function Dropdown() {
		_classCallCheck(this, Dropdown);

		var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

		_this.state = {
			toggleList: false
		};

		_this.setList = _this.setList.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Dropdown, [{
		key: 'setList',
		value: function setList() {
			var list = this.props.list;

			return list.map(function (node, i) {
				return _react2.default.createElement(
					'li',
					{ key: i, className: _styles2.default.item },
					(typeof node === 'undefined' ? 'undefined' : _typeof(node)) === _typeof({}) ? _react2.default.createElement(
						'a',
						_extends({}, node.props, { className: _styles2.default.text, href: node.link || '#' }),
						node.name
					) : _react2.default.createElement(
						'span',
						{ key: i, className: _styles2.default.text },
						node
					)
				);
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			this.setState(function (state) {
				return {
					toggleList: !state.toggleList
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var label = this.props.label;
			var toggleList = this.state.toggleList;

			var passedProps = _extends({}, this.props);
			delete passedProps.label;
			delete passedProps.list;
			return _react2.default.createElement(
				'div',
				{ className: _styles2.default.wrapper },
				_react2.default.createElement(
					'button',
					{ className: _styles2.default.caption, onClick: this.handleClick },
					label
				),
				_react2.default.createElement(
					'ul',
					_extends({}, passedProps, { className: toggleList ? _styles2.default.listVisible : _styles2.default.listInvisible }),
					this.setList()
				)
			);
		}
	}]);

	return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
	list: _propTypes2.default.array,
	label: _propTypes2.default.string
};

Dropdown.defaultProps = {
	list: []
};

exports.default = (0, _reactLook2.default)(Dropdown);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
	caption: {
		minWidth: 150,
		height: '2.5rem',
		fontSize: '1.15rem',
		color: _colors.white,
		backgroundColor: _colors.secondary,
		border: '5px solid ' + _colors.secondary,
		borderRadius: 5,
		margin: '7px 15px',
		boxSizing: 'border-box',
		transition: 'opacity 0.25s linear',
		':hover': {
			opacity: 0.8
		},
		':active': {
			backgroundColor: _colors.secondaryDarker,
			border: '5px solid ' + _colors.secondaryDarker
		},
		':focus': {
			outline: 'none'
		}
	},
	listVisible: {
		visibility: 'visible',
		backgroundColor: _colors.lightGray,
		minWidth: 150,
		marginTop: 10,
		boxSizing: 'border-box',
		padding: 0,
		position: 'relative',
		listStyleType: 'none',
		borderRadius: 5
	},
	listInvisible: {
		visibility: 'none',
		opacity: 0,
		position: 'fixed',
		zIndex: -100
	},
	item: {
		padding: '7px 5px',
		boxSizing: 'border-box',
		cursor: 'pointer',
		transition: 'background-color 0.1s linear',
		':hover': {
			backgroundColor: _colors.gray
		},
		':first-child': {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5
		},
		':last-child': {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5
		}
	},
	text: {
		color: '#555',
		textDecoration: 'none',
		fontSize: '0.85rem'
	},
	wrapper: {
		margin: '7px 15px',
		padding: 0
	}
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(28);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
	_inherits(Navbar, _Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

		_this.setSearchbar = _this.setSearchbar.bind(_this);
		return _this;
	}

	_createClass(Navbar, [{
		key: 'setSearchbar',
		value: function setSearchbar() {
			var _this2 = this;

			var placeholder = this.props.placeholder;

			return _react2.default.createElement(
				'form',
				{ className: _styles2.default.searchbar, onSubmit: function onSubmit(e) {
						e.preventDefault;_this2.props.onSearch(_this2.searchInput.value);
					} },
				_react2.default.createElement('input', { className: _styles2.default.searchInput, type: 'search', placeholder: placeholder, ref: function ref(input) {
						return _this2.seatchInput = input;
					} })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    middle = _props.middle,
			    right = _props.right;

			return _react2.default.createElement(
				'nav',
				{ className: _styles2.default.bar },
				_react2.default.createElement(
					'header',
					{ className: _styles2.default.title },
					title
				),
				middle && _react2.default.createElement(
					'div',
					null,
					middle
				),
				this.props.searchbar && this.setSearchbar(),
				right && _react2.default.createElement(
					'div',
					null,
					right
				)
			);
		}
	}]);

	return Navbar;
}(_react.Component);

Navbar.propTypes = {
	title: _propTypes2.default.node,
	middle: _propTypes2.default.node,
	right: _propTypes2.default.node,
	searchbar: _propTypes2.default.bool,
	onSearch: _propTypes2.default.function,
	placeholder: _propTypes2.default.string
};

Navbar.defaultProps = {
	onSearch: function onSearch() {},
	searchbar: false,
	placeholder: 'Search'
};

exports.default = (0, _reactLook2.default)(Navbar);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
	bar: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px 6px',
		backgroundColor: _colors.primary,
		color: _colors.white,
		border: '6px solid ' + _colors.primary,
		borderRadius: 6,
		boxSizing: 'border-box',
		minHeight: '10%',
		textDecoration: 'none'
	},
	title: {
		fontSize: 24,
		fontWeight: 600,
		letterSpacing: 0.35
	},
	searchbar: {
		alignSelf: 'right'
	},
	searchInput: {
		minWidth: 150,
		fontSize: 15,
		backgroundColor: _colors.primaryDarker,
		borderColor: _colors.primaryDarker,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: 5,
		boxSizing: 'border-box',
		padding: '5px 10px',
		color: _colors.gray,
		transition: 'all 0.25s linear',
		'::-webkit-input-placeholder': {
			color: _colors.gray
		},
		':-moz-placeholder': {
			color: _colors.gray
		},
		'::-moz-placeholder': {
			color: _colors.gray
		},
		':-ms-input-placeholder': {
			color: _colors.gray
		},
		':focus': {
			outline: 'none',
			borderColor: _colors.secondary,
			color: _colors.secondary,
			'::-webkit-input-placeholder': {
				color: _colors.secondary
			},
			':-moz-placeholder': {
				color: _colors.secondary
			},
			'::-moz-placeholder': {
				color: _colors.secondary
			},
			':-ms-input-placeholder': {
				color: _colors.secondary
			}
		}
	}

});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
	_inherits(ProgressBar, _Component);

	function ProgressBar() {
		_classCallCheck(this, ProgressBar);

		return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
	}

	_createClass(ProgressBar, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    percent = _props.percent,
			    type = _props.type;

			return _react2.default.createElement(
				'div',
				{ className: _styles2.default.wrapper },
				_react2.default.createElement('div', { className: _styles2.default[type], style: { width: percent + '%' } })
			);
		}
	}]);

	return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
	percent: _propTypes2.default.number,
	type: _propTypes2.default.string
};

ProgressBar.defaultProps = {
	percent: 25,
	type: 'default'
};

exports.default = (0, _reactLook2.default)(ProgressBar);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

function progressBarGenerator(color) {
	return {
		backgroundColor: color,
		margin: 0,
		height: '100%',
		transition: 'width 0.5s ease'
	};
}

exports.default = _reactLook.StyleSheet.create({
	wrapper: {
		backgroundColor: _colors.lightGray,
		width: '100%',
		height: 12,
		borderRadius: 32,
		padding: 0,
		overflow: 'hidden'
	},
	default: progressBarGenerator(_colors.secondary),
	inverse: progressBarGenerator(_colors.primary),
	warning: progressBarGenerator(_colors.yellow),
	danger: progressBarGenerator(_colors.red),
	success: progressBarGenerator(_colors.green),
	info: progressBarGenerator(_colors.blue)
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(32);

var _styles2 = _interopRequireDefault(_styles);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    _this.setOptions = _this.setOptions.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'setOptions',
    value: function setOptions() {
      return this.props.options.map(function (node, i) {
        return _react2.default.createElement(
          'option',
          { key: i, className: _styles2.default.item, value: (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === _typeof({}) ? node.value : node },
          node.name || node
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var name = this.props.name;

      var passedProps = _extends({}, this.props);
      delete passedProps.options;

      return _react2.default.createElement(
        'select',
        _extends({}, passedProps, { name: name, className: _styles2.default.caption }),
        this.setOptions()
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  options: _propTypes2.default.array,
  name: _propTypes2.default.string
};

Select.defaultProps = {
  options: []
};

exports.default = (0, _reactLook2.default)(Select);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
	caption: {
		appearance: 'none',
		minWidth: 150,
		height: '2.5rem',
		fontSize: '1.15rem',
		color: _colors.white,
		backgroundColor: _colors.secondary,
		border: '5px solid ' + _colors.secondary,
		borderRadius: 5,
		boxSizing: 'border-box',
		transition: 'opacity 0.25s linear',
		':hover': {
			opacity: 0.8
		},
		':active': {
			backgroundColor: _colors.secondaryDarker,
			border: '5px solid ' + _colors.secondaryDarker
		},
		':focus': {
			outline: 'none'
		},
		'::ms-expand': {
			display: 'none'
		}
	},
	item: {
		appearance: 'button',
		background: _colors.lightGray,
		color: '#555',
		padding: '7px 5px',
		cursor: 'pointer',
		boxSizing: 'border-box',
		transition: 'background-color 0.1s linear',
		':hover': {
			background: _colors.gray + ' !important'
		},
		':active': {
			background: _colors.gray
		}
	}
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(34);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

		_this.state = {
			active: 0
		};
		_this.setSeparators = _this.setSeparators.bind(_this);
		return _this;
	}

	_createClass(Slider, [{
		key: 'setSeparators',
		value: function setSeparators(sep) {
			var sections = this.props.sections;

			var arr = [];
			for (var i = 1; i < sections; i++) {
				arr.push(_react2.default.createElement('div', { key: i, className: _styles2.default.separator, style: { left: sep * i + '%' } }));
			}
			return arr;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    sections = _props.sections,
			    type = _props.type;
			var active = this.state.active;


			var sep = 100 / sections;

			return _react2.default.createElement(
				'div',
				{ className: _styles2.default.container },
				_react2.default.createElement('div', { className: _styles2.default.circle, style: { left: sep * active / 2 + '%' } }),
				_react2.default.createElement(
					'div',
					{ className: _styles2.default.wrapper },
					_react2.default.createElement('div', { className: _styles2.default.bar, style: { width: sep * active + '%' } }),
					this.setSeparators(sep)
				)
			);
		}
	}]);

	return Slider;
}(_react.Component);

Slider.propTypes = {
	sections: _propTypes2.default.number
};

Slider.defaultProps = {
	sections: 1
};

exports.default = (0, _reactLook2.default)(Slider);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
	wrapper: {
		backgroundColor: _colors.lightGray,
		width: '100%',
		height: 12,
		borderRadius: 32,
		padding: 0,
		overflow: 'hidden',
		position: 'absolute'
	},
	separator: {
		width: 6,
		height: 6,
		borderRadius: '100%',
		backgroundColor: _colors.gray,
		position: 'relative',
		display: 'inline-block',
		top: -5
	},
	bar: {
		backgroundColor: _colors.secondary,
		margin: 0,
		position: 'absolute',
		height: '100%',
		zIndex: 1,
		transition: 'width 0.5s ease'
	},
	circle: {
		position: 'absolute',
		height: 18,
		width: 18,
		backgroundColor: _colors.secondary,
		zIndex: 2,
		marginTop: -3,
		marginLeft: -9,
		borderRadius: '100%',
		transition: 'all 0.5s ease',
		cursor: 'pointer',
		':hover': {
			backgroundColor: _colors.secondaryDarker
		},
		':active': {
			backgroundColor: _colors.secondaryDarker
		}
	},
	container: {
		display: 'block',
		height: 25
	}
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(36);

var _styles2 = _interopRequireDefault(_styles);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _uid = __webpack_require__(40);

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_Component) {
	_inherits(Tags, _Component);

	function Tags(props) {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

		_this.state = {
			values: props.values
		};

		_this.deleteTag = _this.deleteTag.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.setDatalist = _this.setDatalist.bind(_this);
		return _this;
	}

	_createClass(Tags, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.state.values !== nextProps.values) this.setState({
				values: nextProps.values
			});
		}
	}, {
		key: 'deleteTag',
		value: function deleteTag(i) {
			console.log(i);
			this.setState(function (state) {
				return {
					values: [].concat(_toConsumableArray(state.values.slice(0, i)), _toConsumableArray(state.values.slice(i + 1)))
				};
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevState) {
			if (prevState.values !== this.state.values) {
				if (this.props.onUpdate) {
					this.props.onUpdate(this.state.values);
				}
			}
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			if (!this.props.repeatValues || !this.state.values.includes(this.input.value)) {
				this.setState({
					values: [].concat(_toConsumableArray(this.state.values), [this.input.value])
				});
			}
			this.input.value = '';
		}
	}, {
		key: 'setDatalist',
		value: function setDatalist(id) {
			var list = this.props.list;

			return _react2.default.createElement(
				'datalist',
				{ id: id },
				list.map(function (opt, i) {
					return _react2.default.createElement('option', { key: i, value: opt });
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var values = this.state.values;

			var uid = (0, _uid2.default)();

			return _react2.default.createElement(
				'section',
				_extends({}, this.props, { className: _styles2.default.wrapper }),
				this.props.list && this.setDatalist(uid),
				values.map(function (tag, i) {
					return _react2.default.createElement(
						'span',
						{ key: i, className: _styles2.default.label, onClick: function onClick() {
								return _this2.deleteTag(i);
							} },
						tag
					);
				}),
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit, className: _styles2.default.form },
					_react2.default.createElement('input', {
						type: 'text',
						className: _styles2.default.input,
						list: this.props.list ? uid : undefined,
						ref: function ref(input) {
							return _this2.input = input;
						} })
				)
			);
		}
	}]);

	return Tags;
}(_react.Component);

Tags.propTypes = {
	values: _propTypes2.default.array,
	list: _propTypes2.default.array
};

Tags.defaultProps = {
	values: []
};

exports.default = (0, _reactLook2.default)(Tags);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

exports.default = _reactLook.StyleSheet.create({
	wrapper: {
		height: 'auto',
		backgroundColor: _colors.white,
		border: '2px solid ' + _colors.secondary,
		borderRadius: 6,
		padding: 3,
		boxSizing: 'border-box',
		margin: '7px 15px'
	},
	label: {
		display: 'inline-block',
		padding: '2px 15px',
		fontSize: 14,
		margin: 3,
		boxSizing: 'border-box',
		border: '2px solid ' + _colors.secondary,
		borderRadius: 5,
		backgroundColor: _colors.secondary,
		color: _colors.white,
		cursor: 'pointer',
		transition: 'background-color 0.25s linear, \
		border 0.25s linear, \
		padding-left 0.15s linear, padding-right 0.15s linear',
		':hover': {
			paddingLeft: 2,
			paddingRight: 28,
			backgroundColor: _colors.secondaryDarker,
			border: '2px solid ' + _colors.secondaryDarker,
			':after': {
				opacity: 1
			}
		},
		':after': {
			content: '"x"',
			position: 'absolute',
			marginLeft: 15,
			opacity: 0,
			transition: 'opacity 0.15s linear'
		}
	},
	form: {
		padding: 0,
		margin: 0,
		display: 'inline',
		height: 'auto',
		width: '100%'
	},
	input: {
		fontSize: 14,
		color: _colors.font,
		width: 'auto',
		border: 'none',
		background: 'none',
		':focus': {
			outline: 'none'
		}
	}
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLook = __webpack_require__(0);

var _reactLook2 = _interopRequireDefault(_reactLook);

var _styles = __webpack_require__(38);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled;

      return _react2.default.createElement('input', _extends({}, this.props, { className: _styles2.default[className], disabled: className === 'disabled' ? true : disabled }));
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.disabled
};

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
};

exports.default = (0, _reactLook2.default)(TextInput);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(2);

var _reactLook = __webpack_require__(0);

function inputGenerator(color) {
  var otherStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, {
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    border: '2px solid ' + color,
    borderRadius: 10,
    color: color,
    fontSize: '16px',
    padding: '0.75rem 1rem',
    boxShadow: 'none',
    transition: 'border 0.15s linear',
    ':focus': {
      outline: 'none'
    },
    '::-webkit-input-placeholder': {
      color: color
    },
    ':-moz-placeholder': {
      color: color
    },
    '::-moz-placeholder': {
      color: color
    },
    ':-ms-input-placeholder': {
      color: color
    }
  }, otherStyles);
}

exports.default = _reactLook.StyleSheet.create({
  active: inputGenerator(_colors.gray, {
    color: _colors.font,
    ':focus': {
      outline: 'none',
      border: '2px solid ' + _colors.secondary
    }
  }),
  success: inputGenerator(_colors.green),
  error: inputGenerator(_colors.red),
  disabled: inputGenerator(_colors.gray, {
    backgroundColor: 'rgba(240, 240, 240, 0.7)'
  })
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  UIProvider: __webpack_require__(14).default,
  Button: __webpack_require__(5).default,
  Box: __webpack_require__(4).default,
  TextInput: __webpack_require__(13).default,
  Dropdown: __webpack_require__(7).default,
  Select: __webpack_require__(10).default,
  Tags: __webpack_require__(12).default,
  Navbar: __webpack_require__(8).default,
  Progress: __webpack_require__(9).default,
  Slider: __webpack_require__(11).default,
  Checkbox: __webpack_require__(6).default
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = uidCreator;
function uidCreator() {
	var d = new Date();
	return '$s'.concat(d.getMinutes()).concat(d.getDate());
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=sand.js.map