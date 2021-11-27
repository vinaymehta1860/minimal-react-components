"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeData = void 0;

const normalizeData = function normalizeData() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!data.length) {
    return data;
  }

  const labels = [],
        values = [];
  data.forEach(_data => {
    if (_data && _data.length) {
      labels.push(_data[0]);

      _data.shift();

      values.push(_data);
    }
  });
  return {
    labels,
    values
  };
};

exports.normalizeData = normalizeData;