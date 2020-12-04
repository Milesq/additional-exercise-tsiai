export default (num, prec) => {
  prec = prec ** 10;
  return Math.floor(num * prec) / prec;
};
