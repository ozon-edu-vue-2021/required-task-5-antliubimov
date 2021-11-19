const FIRST_IMG_NUMBER = 0;
const MIN_PRICE = 0;
const MAX_PRICE = 1000;

function imgPath(arr) {
  return `${arr[randomNumber(FIRST_IMG_NUMBER, arr.length - 1)]}.webp`;
}

function fullPath(arr) {
  return require("@/assets/images/" + imgPath(arr));
}

function randomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const utils = {
  MIN_PRICE,
  MAX_PRICE,
  fullPath,
  randomNumber,
};
