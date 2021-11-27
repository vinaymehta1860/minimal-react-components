"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = props => {
  const {
    text,
    children,
    styles,
    onSubmit
  } = props;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, _extends({
    onClick: onSubmit
  }, styles), text !== '' ? text : undefined, text === '' ? children : undefined);
};

Button.defaultProps = {
  text: '',
  styles: {},
  onSubmit: () => {}
};
Button.propTypes = {
  text: _propTypes.default.string,
  styles: _propTypes.default.instanceOf(Object),
  onSubmit: _propTypes.default.func
};
var _default = Button;
exports.default = _default;