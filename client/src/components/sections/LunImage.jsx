import React from "react";
import { useSelector } from "react-redux";
import { go } from 'fxjs';
import { useState, useEffect } from "react";
import { useMemo } from "react";

const LunImage = () => {
  const day = useSelector(({lun: {day}}) => day);
  const { data, isLoading } = useSelector(({ lun }) => lun.cycle);
  const [moonLocation, setMoonLocation] = useState(_middle);
  const [time, setTime] = useState(0);

  const _left = useMemo(() => ({
    width: '60%',
    height: '12rem',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
  }), []);
  const _right = useMemo(() => ({
    width: '60%',
    height: '12rem',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
  }), []);
  const _middle = useMemo(() => ({
    width: '60%',
    height: '12rem',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-start',
    backgroundColor: 'red'
  }), []);

  useEffect(() => setTime(toMinute(now())), []);
  useEffect(() => {findMoonLocation}, [data]);
  // typeof data.moonset  // string
  const makeLunImg = date => {
    if(date < 2){
      return <div>🌚</div> // 삭
    }
    else if (date < 3){
      return <div>🌑</div> // 삭 -> 초승 
    }
    else if (date < 5){
      return <div>🌒</div> // 초승
    }
    else if (date < 7){
      return <div>🌒</div> // 초승 -> 상현
    }
    else if (date < 9){
      return <div>🌓</div>  // 상현
    }
    else if (date < 15){
      return <div>🌔</div> // 상현 -> 보름
    }
    else if (date < 17){
      return <div>🌕</div>  // 보름
    }
    else if (date < 21){
      return <div>🌖</div> // 보름 -> 하현
    }
    else if (date < 24){
      return <div>🌗</div> // 하현
    }
    else if (date < 27){
      return <div>🌘</div> // 하현 -> 그믐
    }
    else if (date < 29){
      return <div>🌘</div> // 그믐
    }
    else if (date < 30){
      return <div>🌚</div> // 그믐 -> 삭
    }
  };

  const add = (a, b) => a + b;
  const numSubstr = (start, end, t) => Number(t.substring(start, end));

  const toMinute = t => 
    add(numSubstr(0, 2, t) * 60,  numSubstr(2, 4, t));

  // 2132
  const now = () => go(
    new Date(),
    d => add(
      String(d.getHours()),
      String(d.getMinutes()))
  );

  const findMoonLocation = () => {
    if (data) {
      const rise = toMinute(data.moonrise);
      const transit =  toMinute(data.moontransit);
      const set = toMinute(data.moonset);
      const now = toMinute(now());

      if (rise < now < transit) {
        setMoonLocation(_left);
      }
      if (now == transit) {
        setMoonLocation(_middle);
      }
      if (transit < now < set) {
        setMoonLocation(_right);
      }
    }
  };

  return !(day.isLoading) && ( 
    <div style={{ display:'flex', justifyContent:'center', width:'100%', margin: '0'}}>      
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'80%'}}>

        {/* 달 위치 */}
        <div className='container-lun-img' style={ moonLocation }>
          <div style={{
            fontSize:'4rem',
            }}>
              { makeLunImg(day.data) }
          </div>
        </div>

        <div style={{
          border:'0.5px solid black',
          width: '100%'
        }}></div>
      </div>
    </div>
  );
};

export default LunImage;