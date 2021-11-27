"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _menuItem = _interopRequireDefault(require("./menu-item"));

var _colors = require("../colors");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Menu = props => {
  const {
    menuItems,
    selectedItemIndex,
    parentRef,
    showIconForSelectedItem,
    styles,
    onSelect
  } = props;

  const renderMenuItems = () => {
    return menuItems.map((menuItem, index) => {
      return /*#__PURE__*/_react.default.createElement(_menuItem.default, {
        key: index,
        itemIndex: index,
        label: menuItem.label,
        isSelected: selectedItemIndex === index,
        showIconForSelectedItem: showIconForSelectedItem,
        onSelect: onSelect,
        styles: styles
      });
    });
  };

  return /*#__PURE__*/_react.default.createElement(Container, {
    width: styles.width,
    top: parentRef.current.getBoundingClientRect().top + 42,
    left: parentRef.current.getBoundingClientRect().left
  }, renderMenuItems());
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: ", ";\n  height: fit-content;\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  color: WHITE;\n  box-shadow: 8px 8px 8px LIGHTBLACK;\n  background-color: ", ";\n"])), _ref => {
  let {
    width
  } = _ref;
  return width ? "".concat(width, " + 20px") : '170px';
}, _ref2 => {
  let {
    top
  } = _ref2;
  return "".concat(top, "px");
}, _ref3 => {
  let {
    left
  } = _ref3;
  return "".concat(left, "px");
}, _colors.LIGHTBLACK);

Menu.defaultProps = {
  menuItems: [],
  selectedItemIndex: -1,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
};
Menu.propTypes = {
  menuItems: _propTypes.default.instanceOf(Array),
  selectedItemIndex: _propTypes.default.number,
  showIconForSelectedItem: _propTypes.default.bool,
  styles: _propTypes.default.instanceOf(Object),
  onSelect: _propTypes.default.func
};
var _default = Menu;
exports.default = _default;