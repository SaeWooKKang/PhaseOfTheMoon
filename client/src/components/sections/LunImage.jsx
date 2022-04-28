import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { go } from 'fxjs';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { canISeeTheMoonAction } from '../../redux/reducers/moonSlice';

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
    margin-bottom: 8px;

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

const MoonDirection = styled.div`
  width: 60%;
  height: ${({ height }) => height || 'auto'};
  margin-top: 10px;
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent || 'center' };
  align-items: ${ ({ alignItems }) => alignItems || 'flex-start' };
`;

const LunImage = () => {
  const dispatch = useDispatch();
  const day = useSelector(({lun: { day }}) => day);
  const { data, isLoading } = useSelector(({ lun }) => lun.cycle);
  const [canISeeTheMoon, setCanISeeTheMoon] = useState(true);
  const [directionCSS, setDirectionCSS] = useState({ 
    justifyContent: '',
    alignItems: '',
    height:''
  });

  useEffect(() => findMoonLocationAndSet(), [isLoading]);

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
    date => add(
      String(date.getHours()),
      String(date.getMinutes()))
  );

  const findMoonLocationAndSet = () => {
    if (data) {
      const rise = toMinute(data.moonrise);
      const transit =  toMinute(data.moontransit);
      const set = toMinute(data.moonset);
      console.log(transit);
      const nowTime = toMinute(now());
      // const nowTime = 700;

      if (nowTime < rise) {
        setCanISeeTheMoon(false);
      } else if ( nowTime < transit) {
        setDirectionCSS({
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if (nowTime == transit) {  
        setDirectionCSS({
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if (nowTime < set) {
        setDirectionCSS({
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else {
        setCanISeeTheMoon(false);
      }
    }
  };

  return !(day.isLoading) && ( 
    <LunImageWrapper>      
      <div className='wrapper-child'>

        <MoonDirection 
          justifyContent={ directionCSS.justifyContent } 
          alignItems={ directionCSS.alignItems }
          height={ directionCSS.height }
          >
          <div className='lun-img-by-date'>
              { makeLunImgByDate(day.data) }
          </div>
        </MoonDirection>

        { 
          !canISeeTheMoon || 
            <>
              <div className='direction'>
                <div>⇢</div>
                <div>⇢</div>
              </div>

              <hr className='horizon' />
            </>
        }
      </div>
    </LunImageWrapper>
  );
};

export default LunImage;