const plusZero = (v: string) => /../.test(v) ? v : `0${v}`;

export const makeYearMonthDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = Number(plusZero(String(now.getMonth() + 1)));
  const date = Number(plusZero(String(now.getDate()))); 
  const YMD = Number(`${year}${month}${date}`);

  return { year, month, date, YMD };
};
