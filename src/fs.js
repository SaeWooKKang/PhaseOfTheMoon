exports.date = () => {
  const plusZero = a => a > 9 ? a : `0${a}`;
  
  const now = new Date();

  const year = String(now.getFullYear());
  const month = String(plusZero(now.getMonth() + 1));
  const date = String(plusZero(now.getDate())); 

  return {year, month, date};
};






