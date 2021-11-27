"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValuesContainer = exports.Row = exports.LabelsContainer = exports.Container = exports.Cell = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: fit-content;\n  margin: 5px;\n  padding: 2px;\n"])));

exports.Container = Container;

const LabelsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: ", ";\n  height: fit-content;\n"])), _ref => {
  let {
    width
  } = _ref;
  return width ? "".concat(width) : '150px';
});

exports.LabelsContainer = LabelsContainer;

const ValuesContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: 1125px;\n  height: fit-content;\n  overflow-x: scroll;\n"])));

exports.ValuesContainer = ValuesContainer;

const Row = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  height: 50px;\n  border-bottom: 1px solid ", ";\n  padding: 0;\n"])), _colors.LIGHTGRAY);

exports.Row = Row;

const Cell = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: ", ";\n  align-items: ", ";\n  width: ", ";\n  height: 100%;\n  background-color: ", ";\n  font-weight: ", ";\n"])), _ref2 => {
  let {
    justifyContent
  } = _ref2;
  return justifyContent ? "".concat(justifyContent) : 'center';
}, _ref3 => {
  let {
    alignItems
  } = _ref3;
  return alignItems ? "".concat(alignItems) : 'left';
}, _ref4 => {
  let {
    width
  } = _ref4;
  return width ? "".concat(width) : '150px';
}, _ref5 => {
  let {
    backgroundColor
  } = _ref5;
  return backgroundColor ? "".concat(backgroundColor) : 'transparent';
}, _ref6 => {
  let {
    isHeader
  } = _ref6;
  return isHeader ? 'bold' : 'none';
});

exports.Cell = Cell;