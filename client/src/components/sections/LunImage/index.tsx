import React, { useState, useEffect }from "react";

import { useAppSelector, useAppDispath } from '../../../redux/hooks';
import { canISeeTheMoonAction } from '../../../redux/reducers/moonSlice';

import { LunImageWrapper, MoonDirection, MoonDirectionProps } from './style';
import { now, getTime, cutToHourAndMinute } from './fs'
import { makeYearMonthDate } from "../../../fs";

const LunImage = () => {
  const dispatch = useAppDispath();

  const day_data = useAppSelector(({lun: { day }}) => day.data);
  const cycle_data = useAppSelector(({ lun }) => lun.cycle.data);
  const canISeeTheMoon = useAppSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);
  
  const [directionCSS, setDirectionCSS] = useState<MoonDirectionProps>({ 
    justifyContent: 'center',
    alignItems: 'nomal',
    height:''
  });

  useEffect(() => { findMoonLocationAndSet() }, []);

  const makeLunImgByDate = (date: number) => {
    if(date < 2){
      return <div>π</div> // μ­
    }
    else if (date < 3){
      return <div>π</div> // μ­ -> μ΄μΉ 
    }
    else if (date < 5){
      return <div>π</div> // μ΄μΉ
    }
    else if (date < 7){
      return <div>π</div> // μ΄μΉ -> μν
    }
    else if (date < 9){
      return <div>π</div>  // μν
    }
    else if (date < 15){
      return <div>π</div> // μν -> λ³΄λ¦
    }
    else if (date < 17){
      return <div>π</div>  // λ³΄λ¦
    }
    else if (date < 21){
      return <div>π</div> // λ³΄λ¦ -> νν
    }
    else if (date < 24){
      return <div>π</div> // νν
    }
    else if (date < 27){
      return <div>π</div> // νν -> κ·Έλ―
    }
    else if (date < 29){
      return <div>π</div> // κ·Έλ―
    }
    else if (date < 30){
      return <div>π</div> // κ·Έλ― -> μ­
    }
  };

  /**
   * APIλ‘ μμΆ μμ€ μλͺ° λ°μ΄ν° λ°μμ 
   * date.prototype.getTimeμΌλ‘ μ«μλ‘ λ°κΏμ
   * μμΉ λΉκ΅νμ¬ css μ§μ 
   */
  const findMoonLocationAndSet = () => {
    if (cycle_data) {
      const { year, month, date } = makeYearMonthDate();

      const times = [cycle_data.moonrise, cycle_data.moontransit, cycle_data.moonset, now()];
      const [rise, transit, set, present] = times
        .map(time => cutToHourAndMinute(time));

      let [riseTime, transitTime, setTime, nowTime] = [rise, transit, set, present]
        .map(t => getTime(+year, +month, +date, +t.h, +t.m));

      // μμ€ μλͺ°μ΄ μμΆκ³Ό dateκ° λ€λ₯Όκ²½μ° dateμ + 1 ν¨
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

      if ((riseTime < nowTime) && (nowTime < transitTime)) {
        setDirectionCSS({
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if (nowTime == transitTime) {
        setDirectionCSS({
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '12rem'
        });
        dispatch(canISeeTheMoonAction());
      } else if ((transitTime < nowTime) && (nowTime < setTime)) {
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
      <div className='wrapper-child'>

        {/* λ¬ μ΄λ―Έμ§  */}
        <MoonDirection 
          justifyContent={ directionCSS.justifyContent } 
          alignItems={ directionCSS.alignItems }
          height={ directionCSS.height }
          >
          <div className='lun-img-by-date'>
              { makeLunImgByDate(day_data as number) }
          </div>
        </MoonDirection>

        {/* μνμ   */}
        { !canISeeTheMoon || 
          <>
            <div className='direction'>
              <div>β’</div>
              <div>β’</div>
            </div>

            <hr className='horizon' />
          </>
        }
      </div>
    </LunImageWrapper>
  );
};

export default LunImage;