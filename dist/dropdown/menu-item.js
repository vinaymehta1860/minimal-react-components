"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fi = require("react-icons/fi");

var _Text = _interopRequireDefault(require("../Text"));

var _colors = require("../colors");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const MenuItem = props => {
  const {
    label,
    itemIndex,
    isSelected,
    showIconForSelectedItem,
    styles,
    onSelect
  } = props;

  const handleMenuItemClick = () => {
    onSelect && onSelect(itemIndex);
  };

  return /*#__PURE__*/_react.default.createElement(Container, {
    width: styles.width,
    onClick: handleMenuItemClick
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: label
  }), showIconForSelectedItem && isSelected && /*#__PURE__*/_react.default.createElement(_fi.FiCheck, {
    size: 25,
    style: {
      color: _colors.BLUE
    }
  }));
};

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: ", ";\n  height: 30px;\n  margin: 0;\n  padding: 5px 10px;\n\n  :hover {\n    outline: 2px solid BLUE;\n  }\n"])), _ref => {
  let {
    width
  } = _ref;
  return width ? "".concat(width) : '150px';
});

MenuItem.defaultProps = {
  label: '',
  itemIndex: null,
  isSelected: false,
  showIconForSelectedItem: true,
  styles: {},
  onSelect: () => {}
};
MenuItem.propTypes = {
  label: _propTypes.default.any,
  itemIndex: _propTypes.default.number,
  isSelected: _propTypes.default.bool,
  showIconForSelectedItem: _propTypes.default.bool,
  styles: _propTypes.default.instanceOf(Object),
  onSelect: _propTypes.default.func
};
var _default = MenuItem;
exports.default = _default;