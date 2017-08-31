function stateData(obj) {
  const names = ['fio', 'email', 'phone'];
  const entries = Object.entries(obj);
  const newEntries = entries.filter(item => ['fio', 'email', 'phone'].includes(item[0]));
  newEntries.forEach(item => {
    // For confirmation that changings have been done only
    const temp = '+TEMP';
    $(`#${item[0]}`).replaceWith(`<p><input type='text' name='${item[0]}' value='${item[1]}${temp}'></p>`);
  });
}
