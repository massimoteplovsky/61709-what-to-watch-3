export const makeRating = (number) => number.toFixed(1).replace(`.`, `,`);

export const makeTextRating = (numericRating) => {

  if (numericRating < 3) {
    return `Bad`;
  }

  if (numericRating >= 3 && numericRating < 5) {
    return `Normal`;
  }

  if (numericRating >= 5 && numericRating < 8) {
    return `Good`;
  }

  if (numericRating >= 8 && numericRating < 10) {
    return `Very good`;
  }

  return `Awesome`;
};

export const makeDuration = (time) => {
  const hours = time < 60 ? 0 : Math.floor(time / 60);
  const minutes = time < 60 ? time : time % 60;

  return `${hours}h ${minutes}m`;
};

export const makeChuncks = (arr, size) => {
  let chunkArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i + size));
    i += size;
  }
  return chunkArr;
};

export const getFormatDate = (date) => {
  return new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});
};

export const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};


