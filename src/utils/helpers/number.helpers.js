export const formatNumber = (num) => {
  const number = Math.abs(num);

  if (number < 10) {
    return `0${number}`;
  }

  return `${number}`;
};
