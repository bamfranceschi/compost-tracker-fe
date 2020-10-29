function avgTemp(tempArray) {
  //returns the average of all elements in array
  return tempArray.reduce((acc, next) => acc + next) / tempArray.length;
}

module.exports = avgTemp;
