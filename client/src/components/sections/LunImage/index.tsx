import React, { useState, useEffect }from "react";

import { useAppSelector, useAppDispath } from '../../../redux/hooks';
import { canISeeTheMoonAction } from '../../../redux/reducers/moonSlice';

import { LunImageWrapper, MoonDirection, MoonDirectionProps } from './style';
import { toMinute, now } from './fs'

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

  useEffect(() => { findMoonLocationAndSet() }, [isLoading]);

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
      console.log(typeof data.moonrise);
      const rise = toMinute(data.moonrise);
      const transit =  toMinute(data.moontransit);
      const set = toMinute(data.moonset);
      const nowTime = toMinute(now());

      if (nowTime < rise) {
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