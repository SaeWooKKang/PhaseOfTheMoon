import { go } from 'fxjs';
type NumSubStrFn = (start: number, end: number, t: string) => number;
const add = (a: string, b: string) => `${a}${b}`;

const numSubstr: NumSubStrFn = (start, end, t) => Number(t.substring(start, end));

export const toMinute = (t: string) => 
  add(String(numSubstr(0, 2, t) * 60),  String(numSubstr(2, 4, t)));

export const now = () => go(
  new Date(),
  (date: Date) => add(
    String(date.getHours()),
    String(date.getMinutes()))
);