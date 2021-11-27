"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _utils = require("./utils");

var _Text = _interopRequireDefault(require("../Text"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Table = props => {
  const {
    data
  } = props;
  const {
    labels = [],
    values = []
  } = (0, _utils.normalizeData)(data);

  const renderLabels = () => {
    return labels.map((_ref, index) => {
      let {
        label,
        options = {}
      } = _ref;
      const isHeader = index === 0;
      return /*#__PURE__*/_react.default.createElement(_styles.Row, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles.Cell, {
        isHeader: isHeader,
        width: options.styles && options.styles.width,
        justifyContent: options.styles && options.styles.justifyContent,
        backgroundColor: isHeader ? _colors.LIGHTBLACK : 'transparent'
      }, /*#__PURE__*/_react.default.createElement(_Text.default, null, label)));
    });
  };

  const renderRow = function renderRow(row) {
    let isHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return row.map((_row, index) => {
      const {
        options = {}
      } = _row;
      const {
        styles = {}
      } = options;
      const {
        width,
        alignItems
      } = styles;
      return /*#__PURE__*/_react.default.createElement(_styles.Cell, {
        key: index,
        width: width,
        isHeader: isHeader,
        backgroundColor: isHeader ? _colors.LIGHTBLACK : 'transparent',
        alignItems: alignItems ? alignItems : undefined
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        styles: Object.assign({}, styles, {
          margin: isHeader ? '0 10px' : undefined
        })
      }, _row.label), _row.subLabel && /*#__PURE__*/_react.default.createElement(_Text.default, {
        styles: Object.assign({}, styles, {
          margin: isHeader ? '0 10px' : undefined
        })
      }, _row.subLabel));
    });
  };

  const renderValues = () => {
    return values.map((value, index) => {
      return /*#__PURE__*/_react.default.createElement(_styles.Row, {
        key: index
      }, renderRow(value, index === 0));
    });
  };

  const getLabelsWidth = () => {
    if (labels && labels.length && labels[0].options && labels[0].options.styles && labels[0].options.styles.width) {
      return labels[0].options.styles.width;
    }

    return undefined;
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.LabelsContainer, {
    width: labels.length ? getLabelsWidth() : undefined
  }, renderLabels()), /*#__PURE__*/_react.default.createElement(_styles.ValuesContainer, null, renderValues()));
};

Table.defaultProps = {
  data: []
};
Table.propTypes = {
  data: _propTypes.default.instanceOf(Array)
};
var _default = Table;
exports.default = _default;