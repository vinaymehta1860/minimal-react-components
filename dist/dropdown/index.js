"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fi = require("react-icons/fi");

var _Text = _interopRequireDefault(require("../Text"));

var _menu = _interopRequireDefault(require("./menu"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Dropdown = props => {
  const {
    dropdownOptions,
    selectedItemIndex,
    showIconForSelectedItem,
    styles,
    onSelect
  } = props;
  const ref = (0, _react.useRef)();
  const [isDropdownOpen, setIsDropdownOpen] = (0, _react.useState)(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = newMenuItemSelected => {
    setIsDropdownOpen(false);
    onSelect(newMenuItemSelected);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, _extends({
    ref: ref,
    onClick: handleDropdownClick
  }, styles), /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: selectedItemIndex > -1 ? dropdownOptions[selectedItemIndex].label : ''
  }), !isDropdownOpen && /*#__PURE__*/_react.default.createElement(_fi.FiChevronDown, {
    size: 25
  }), isDropdownOpen && /*#__PURE__*/_react.default.createElement(_fi.FiChevronUp, {
    size: 25
  }), isDropdownOpen && /*#__PURE__*/_react.default.createElement(_menu.default, {
    menuItems: dropdownOptions,
    selectedItemIndex: selectedItemIndex,
    onSelect: handleMenuItemClick,
    parentRef: ref,
    showIconForSelectedItem: showIconForSelectedItem,
    styles: styles
  }));
};

Dropdown.defaultProps = {
  dropdownOptions: [],
  selectedItemIndex: -1,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
};
Dropdown.propTypes = {
  dropdownOptions: _propTypes.default.instanceOf(Array),
  selectedItemIndex: _propTypes.default.number,
  showIconForSelectedItem: _propTypes.default.bool,
  styles: _propTypes.default.instanceOf(Object),
  onSelect: _propTypes.default.func
};
var _default = Dropdown;
exports.default = _default;