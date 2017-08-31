function obtainData() {
  var inputFields = document.getElementById('form').getElementsByTagName('input');
  const obj = [...inputFields].filter(item => item.type === 'text')
    .reduce((acc, item) => {
      acc[item.name] = item.value;return acc;
    }, {});
  return obj;
};
