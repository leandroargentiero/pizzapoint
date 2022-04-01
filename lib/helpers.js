export const roundOff = (num, decimals) => {
  const x = Math.pow(10, decimals);
  return Math.round(num * x) / x;
};
