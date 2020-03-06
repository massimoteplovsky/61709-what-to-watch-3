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

export const makeTimer = (time) => {
  const pad = (num) => num < 10 ? `0${num}` : num;
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${hours}:${pad(minutes)}:${pad(seconds)}`;
};

export const toCamelCase = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1
      .toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const isObject = (obj) => {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== `function`;
};

export const convertObjectKeys = (obj) => {
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj).forEach((k) => {
      newObj[toCamelCase(k)] = convertObjectKeys(obj[k]);
    });

    return newObj;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return convertObjectKeys(i);
    });
  }

  return obj;
};

export const validateEmail = (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};


