export const plusZero = (v: string) => /../.test(v) ? v : `0${v}`;

export const makeYearMonthDate = () => {
  const now = new Date();

  const year = String(now.getFullYear());
  const month = plusZero(String(now.getMonth() + 1));
  const date = plusZero(String(now.getDate())); 
  const YMD = `${year}${month}${date}`;

  return { year, month, date, YMD };
};
