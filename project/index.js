const myForm = {};

myForm.validate = function validate() {
  let valid;
  $.ajax({
    url: './util/validate.js',
    dataType: 'script',
    async: false,
    success: function () {
      valid = getValidation();
    },
    error: function () {
      throw new Error('Could not load script');
    },
  });
  return valid;
};

myForm.getData = function getData() {
  let data;
  $.ajax({
    url: './util/getData.js',
    dataType: 'script',
    async: false,
    success: function () {
      data = obtainData();
    },
    error: function () {
      throw new Error('Could not load script ');
    },
  });
  return data;
};

myForm.setData = function setData(obj) {
  $.ajax({
    url: './util/setData.js',
    dataType: 'script',
    async: false,
    success: function () {
      stateData(obj);
    },
    error: function () {
      throw new Error('Could not load script');
    },
  });
};

function server(path) {
  $.ajax({
    url: path,
    dataType: 'script',
    async: false,
    success: function () {
      server();
    },
    error: function () {
      throw new Error('Could not load script');
    },
  });
};

myForm.submit = function submit() {
  const validationData = myForm.validate();
  if (validationData.isValid) {
    const pathToServer = $('#form').attr('action');
    server(pathToServer);
  }
};

$(document).ready(function () {
  $('#form').submit(function () {
  // open to see getData() in action
  // alert(JSON.stringify(myForm.getData()));

  // opet to see setData() in action
  // myForm.setData(myForm.getData());

  // normal flow
  myForm.submit();
  });
});
