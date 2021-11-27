"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = props => {
  const {
    icon,
    styles
  } = props;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, styles, icon);
};

Icon.defaultProps = {
  styles: {}
};
Icon.propTypes = {
  styles: _propTypes.default.instanceOf(Object)
};
var _default = Icon;
exports.default = _default;