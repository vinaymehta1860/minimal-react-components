"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Checkbox = props => {
  const {
    isChecked,
    label,
    onClick
  } = props;
  const [checkboxValue, setCheckBoxValue] = (0, _react.useState)(isChecked);
  (0, _react.useEffect)(() => {
    onClick && onClick(checkboxValue);
  }, [checkboxValue]);

  const onSelect = event => {
    setCheckBoxValue(event.target.checked);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checkboxValue,
    onChange: onSelect,
    id: "check",
    name: "check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    style: {
      marginLeft: '10px'
    },
    htmlFor: "check"
  }, label));
};

Checkbox.defaultProps = {
  isChecked: false,
  label: '',
  onClick: () => {}
};
Checkbox.propTypes = {
  isChecked: _propTypes.default.bool,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Checkbox;
exports.default = _default;