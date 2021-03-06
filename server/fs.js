const plusZero = (v) => /../.test(v) ? v : `0${v}`;

exports.date = (ms) => {
  const now = new Date(ms);

  const year = now.getFullYear();
  const month = plusZero(now.getMonth() + 1);
  const date = plusZero(now.getDate()); 
  const YMD = `${year}${month}${date}`;

  return { year, month, date, YMD };
};