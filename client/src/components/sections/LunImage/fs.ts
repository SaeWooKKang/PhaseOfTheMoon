import { go } from 'fxjs';
import { plusZero } from '../../../fs';


const addStr = (a: string, b: string) => a + b;

/**
 * @returns 시간,분 네자리 반환 ex) 1823
 */
export const now = () => go(
  new Date(),
  (date: Date) => addStr(
    String(date.getHours()), String(date.getMinutes()))
) as unknown as string;

/**
 * @param s API 날짜 받음
 * @returns 시간하고 분으로 짤라서 반환함
 */
export const cutToHourAndMinute = (s: string) => {
  return {h: s.substring(0, 2), m: s.substring(2, 4) }
}

export const getTime = (y: number, m: number, d: number, hour=0, minute=0) => {
  
  return new Date(`${y}-${plusZero(String(m))}-${plusZero(String(d))}T${plusZero(String(hour))}:${plusZero(String(minute))}:00`).getTime();
};