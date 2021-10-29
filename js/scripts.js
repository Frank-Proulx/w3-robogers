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

function numberChecker(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      return "Won't you be my neighbor?";
    }
  }
  for (j = 0; j < array.length; j++) {
    if (array[j] === 2) {
      return "Boop!";
    }
  }
  for (k = 0; k < array.length; k++) {
    if (array[k] === 1) {
      return "Beep!";
    }
  }
  return parseInt(array.join(''));
}

