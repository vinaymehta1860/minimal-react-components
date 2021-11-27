"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Label = _styledComponents.default.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  margin: 3px;\n"])), _ref => {
  let {
    type
  } = _ref;

  if (type === 'regularText') {
    return '15px';
  } else if (type === 'heading') {
    return '18px';
  } else {
    return '14px';
  }
}, _ref2 => {
  let {
    type
  } = _ref2;

  if (type === 'regularText') {
    return 'none';
  } else if (type === 'heading') {
    return 'bold';
  } else {
    return 'none';
  }
}, _colors.WHITE);