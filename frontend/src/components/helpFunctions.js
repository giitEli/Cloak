export const round = (value, num = 100) => {
  return Math.round(Number(value) * num) / num;
};
