const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  if (isEven(sorted.length)) {
    return getMedian([
      sorted[sorted.length / 2 - 1],
      sorted[sorted.length / 2],
    ]);
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => (counts[el] = counts[el] ? counts[el] + 1 : 1));

  if ((Set = new Set())) {
    Set = new Set(Object.values(counts));
    return null;
  }
};
