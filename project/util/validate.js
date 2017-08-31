function getValidation() {
  const inputFields = document.getElementById('form').getElementsByTagName('input');
  const result = document.getElementById('resultContainer');
  result.getElementsByTagName('label')[0].innerText = '';
  [...inputFields].forEach(item => item.className = 'initial');
  const objResult = {};
  const errors = [];

  if (isFioValid(inputFields[0].value) === false) {
    inputFields[0].className = 'error';
    result.getElementsByTagName('label')[0].innerText = 'Wrong format: FIO';
    errors.push('fio');
  }
  if (isEmailValid(inputFields[1].value) === false) {
    inputFields[1].className = 'error';
    result.getElementsByTagName('label')[0].innerText = 'Wrong format: email';
    errors.push('email');
  }
  if (isPhoneValid(inputFields[2].value) === false) {
    inputFields[2].className = 'error';
    result.getElementsByTagName('label')[0].innerText = 'Wrong format: phone';
    errors.push('phone');
  }

  const validation = errors.length === 0 ? true : false;
  if (validation) {
    inputFields[3].disabled = true;
  }
  return { isValid: validation, errorFields: errors };
}

function isFioValid(fio) {
  const length = fio.trim().split(' ').filter(item => item !== '').length;
  if (length !== 3) {
    return false;
  }
  return true;
}

function isEmailValid(mail) {
  const domains = ['@ya.ru', '@yandex.ru', '@yandex.ua', '@yandex.by', '@yandex.kz'];
  const email = mail.trim();
  if (!email) { return false; }
  if (!email.includes('@')) { return false; }
  if (email.includes('@')) {
    const leftPart = email.slice(0, email.indexOf('@'));
    if (leftPart.includes(' ')) {
      return false;
    }
  }
  if (email.includes('@')) {
    const rightPart = email.slice(email.indexOf('@'), email.length);
    if (!domains.includes(rightPart)) {
      return false;
    }
  }
  return true;
}

function isPhoneValid(phone) {
  const reg = /^[\+]{1}[7]{1}[(]{1}[\d]{3}[)]{1}[\d]{3}[-]{1}[\d]{2}[-]{1}[\d]{2}$/;
  const phoneMatched = phone.trim().search(reg);
  const number = Array.from(phone).filter(item => Number.isInteger(+item))
    .reduce((acc, item) => acc += +item, 0);
  const result = phoneMatched === 0 && number <= 30 ? true : false;
  return result;
}
