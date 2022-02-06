exports.date = () => {
  const plusZero = v => /../.test(v) ? v : `0${v}`
  
  const now = new Date();

  const year = now.getFullYear();
  const month = plusZero(now.getMonth() + 1);
  const date = plusZero(now.getDate()); 

  return {year, month, date};
};



