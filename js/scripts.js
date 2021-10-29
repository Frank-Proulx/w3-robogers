function arrayMaker(number) {
  let maker = [];
  for (i = 0; i <= number; i++) {
    maker.push(i);
  }
  return maker;
}

function numberSplitter(number) {
  let splitter = number.toString().split('');
  let newSplitter = splitter.map(function(element) {
    return parseInt(element);
  });
  return newSplitter;
}