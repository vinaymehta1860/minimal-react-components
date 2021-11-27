"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: nowrap;\njustify-content: space-between;\nalign-items: center;\nwidth: ", ";\nheight: 20px;\nmargin: 5px;\npadding: 10px;\nbackground-color: ", ";\ncursor: pointer;\n"])), _ref => {
  let {
    width
  } = _ref;
  return width ? "".concat(width) : '150px';
}, _colors.LIGHTBLACK);

exports.Container = Container;