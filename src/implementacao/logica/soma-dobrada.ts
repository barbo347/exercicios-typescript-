function somaDobrada(n1: number, n2: number): number {
  if (n1 === n2) {
    return 2 * (n1 + n2);
  } else if (n1 < 1 || n2 < 1) {
    return -1;
  } else {
    return n1 + n2;
  }
}
module.exports = somaDobrada;
