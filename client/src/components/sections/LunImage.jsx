import React from "react";
import { useSelector } from "react-redux";
import { go } from 'fxjs';
import { useState, useEffect, useMemo } from "react";
import { useRef } from "react";
import styled from "styled-components";

const LunImageWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  width: 100%;
  margin: 0;

  .wrapper-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    .lun-img-by-date {
      display: flex; 
      justify-content: center; align-items: center;
      width: 4rem; height: 4rem;
      border-radius: 50%;
      box-shadow: 15px -17px 20px #adacaa;
      background-color: #fff; 
      font-size: 4rem; 
    }
    .direction {
      width: 100%; 
      display: flex; 
      justify-content: space-around;
    }
    .horizon {
      width: 100%;
      margin: 0; 
      border: 0.5px solid black;
    }
  }
`;

const LunImage = () => {
  const day = useSelector(({lun: { day }}) => day);
  const { data, isLoading } = useSelector(({ lun }) => lun.cycle);
  const [mentToggle, setMentToggle] = useState(true);
  const [_, setRerender] = useState();

  // styled-components로 변경할 css 
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
  const _center = useMemo(() => ({
    width: '60%',
    height: '12rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
  }), []);
  const styleMoonLocation = useRef(_center);

  useEffect(() => findMoonLocation(), [isLoading]);

  // typeof data.moonset  // string
  const makeLunImgByDate = date => {
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
      // const nowTime = toMinute(now());
      const nowTime = 700;

     /* 
     setRerender 함수는 styled-component 적용시 변경할것

     inline css 설정시 state값 넣었더니 안되서 
     useRef로 변수 연결한거고,
     useRef는 변경되어도 리렌더링 되지 않으므로 강제로 리렌더링시킨 것
     */
      if (nowTime < rise) {
        setMentToggle(false);
      } else if ( nowTime < transit) {
        styleMoonLocation.current = _left;
        setRerender({});
      } else if (nowTime == transit) {  
        styleMoonLocation.current = _center;
        setRerender({});
      } else if (nowTime < set) {
        styleMoonLocation.current = _right;
        setRerender({});
      } else {
        setMentToggle(false);
      }
    }
  };

  return !(day.isLoading) && ( 
    <LunImageWrapper>      
      <div className='wrapper-child'>

        { mentToggle || (
          <div className='ment' style={{ backgroundColor:'#fff', padding:'4px 8px', marginBottom:'12px', borderRadius:'2px' }}>
            현재 시각은 달을 볼 수 없습니다.
          </div>)
        } 

        <div className='container-lun-img-by-date' style={ styleMoonLocation.current }>
          <div className='lun-img-by-date'>
              { makeLunImgByDate(day.data) }
          </div>
        </div>

        <div className='direction'>
          <div>⇢</div>
          <div>⇢</div>
        </div>

        <hr className='horizon' />
      </div>
    </LunImageWrapper>
  );
};

export default LunImage;