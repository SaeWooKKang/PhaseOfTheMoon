import { go } from 'fxjs';

const add = (a, b) => a + b;

const numSubstr = (start, end, t) => Number(t.substring(start, end));

export const toMinute = t => 
  add(numSubstr(0, 2, t) * 60,  numSubstr(2, 4, t));

export const now = () => go(
  new Date(),
  date => add(
    String(date.getHours()),
    String(date.getMinutes()))
);