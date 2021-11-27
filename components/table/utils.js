export const normalizeData = (data = []) => {
  if (!data.length) {
    return data;
  }

  const labels = [], values = [];

  data.forEach(_data => {
    if(_data && _data.length) {
      labels.push(_data[0]);
      _data.shift();
      values.push(_data);
    }
  });

  return { labels, values };
}
