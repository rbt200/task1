const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const filesArr = ['./server/success.json', './server/error.json', './server/progress.json'];

let timer = 0;
const getJsonData = (file) => {
  $.getJSON(file, function (data) {
    $('#resultContainer').toggleClass(data.status);
    switch (data.status) {
      case 'success':
        $('#result').text(data.status);
        break;
      case 'error':
        $('#result').text(data.reason);
        break;
      case 'progress':
        setTimeout(function () {
          $('#result').text(timer += 1);
          const number = getRandomInt(0, 2);
          // timer < 4 ? getJsonData(file) : getJsonData(filesArr[number]);
          if (timer < 4) {
            getJsonData(file);
          } else {
            getJsonData(filesArr[number]);
          }
        }, 1000);
        break;
      default:
        break;
    }
  });
};

function server() {
  const number = getRandomInt(0, 3);
  getJsonData(filesArr[number]);
}
