import React, { useState, useEffect }from "react";

import { useAppSelector, useAppDispath } from '../../../redux/hooks';
import { canISeeTheMoonAction } from '../../../redux/reducers/moonSlice';

import { LunImageWrapper, MoonDirection, MoonDirectionProps } from './style';
import { now, getTime, cutToHourAndMinute } from './fs'
import { makeYearMonthDate } from "../../../fs";

const LunImage = () => {
  const dispatch = useAppDispath();

  const day = useAppSelector(({lun: { day }}) => day);
  const { data, isLoading } = useAppSelector(({ lun }) => lun.cycle);
  const canISeeTheMoon = useAppSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);
  
  const [directionCSS, setDirectionCSS] = useState<MoonDirectionProps>({ 
    justifyContent: 'center',
    alignItems: 'nomal',
    height:''
  });

  useEffect(() => { findMoonLocationAndSet() }, [data]);

  const makeLunImgByDate = (date: number) => {
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

  const findMoonLocationAndSet = () => {
    if (data) {
      const { year, month, date } = makeYearMonthDate();

      const rise = cutToHourAndMinute(data.moonrise);
      const transit = cutToHourAndMinute(data.moontransit);
      const set = cutToHourAndMinute(data.moonset);
      const nowTime = cutToHourAndMinute(now());

      let riseTime = getTime(+year, +month, +date, +rise.h, +rise.m);
      let transitTime = getTime(+year, +month, +date, +transit.h, +transit.m);
      let setTime = getTime(+year, +month, +date, +set.h, +set.m);

      // 이건 현재 시간 기준이 맞는데
      let nowTime2 = getTime(+year, +month, +date, +nowTime.h, +nowTime.m);

      if (riseTime > transitTime) {
        if (transit.h[0] == '0') {
          transitTime = getTime(+year, +month, +date + 1, +transit.h, +transit.m);
          setTime = getTime(+year, +month, +date + 1, +set.h, +set.m);
        }
      } else if (riseTime > setTime) {
          if(set.h[0] == '0') {
            setTime = getTime(+year, +month, +date + 1, +set.h, +set.m);
          }
      }

      if ((riseTime < nowTime2) && (nowTime2 < transitTime)) {
        setDirectionCSS({
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if (nowTime2 == transitTime) {
        setDirectionCSS({
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if ((transitTime < nowTime2) && (nowTime2 < setTime)) {
        setDirectionCSS({
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      }
    }
  };

  return  ( 
    <LunImageWrapper>    
      { day.isLoading 
        ? <div className='loading-ment'>Loading...</div> 
        : <div className='wrapper-child'>

            <MoonDirection 
              justifyContent={ directionCSS.justifyContent } 
              alignItems={ directionCSS.alignItems }
              height={ directionCSS.height }
              >
              <div className='lun-img-by-date'>
                  { makeLunImgByDate(day.data as number) }
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
      }  
    </LunImageWrapper>
  );
};

export default LunImage;