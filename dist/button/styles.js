"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  padding: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n"])), _ref => {
  let {
    width
  } = _ref;
  return width ? "".concat(width) : '100px';
}, _ref2 => {
  let {
    height
  } = _ref2;
  return height ? "".concat(height) : '40px';
}, _ref3 => {
  let {
    margin
  } = _ref3;
  return margin ? "".concat(margin) : '10px';
}, _ref4 => {
  let {
    padding
  } = _ref4;
  return padding ? "".concat(padding) : '5px';
}, _ref5 => {
  let {
    color
  } = _ref5;
  return color ? "".concat(color) : _.WHITE;
}, _ref6 => {
  let {
    backgroundColor
  } = _ref6;
  return backgroundColor ? "".concat(backgroundColor) : _.BLUE;
}, _ref7 => {
  let {
    borderRadius
  } = _ref7;
  return borderRadius ? "".concat(borderRadius) : '2px';
});

exports.Container = Container;