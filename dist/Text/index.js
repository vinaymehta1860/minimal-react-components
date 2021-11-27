"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Text = props => {
  const {
    children,
    text,
    type,
    styles
  } = props;

  if (text && text.length) {
    return /*#__PURE__*/_react.default.createElement(_styles.Label, {
      style: styles,
      type: type
    }, text);
  } else {
    return /*#__PURE__*/_react.default.createElement(_styles.Label, {
      style: styles,
      type: type
    }, children);
  }
};

Text.defaultProps = {
  text: '',
  type: 'regularText',
  styles: {}
};
Text.propTypes = {
  text: _propTypes.default.any,
  type: _propTypes.default.string,
  styles: _propTypes.default.instanceOf(Object)
};
var _default = Text;
exports.default = _default;