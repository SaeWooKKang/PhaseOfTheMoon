import React from 'react';
import { useEffect } from 'react';
import { lunDay } from '../redux/actions/lunDayAction';
import { useDispatch, useSelector } from 'react-redux';

const Lunday = () => {
  const dispatch = useDispatch();
  const day = useSelector((state) => state.lun.day);

  useEffect(()=>dispatch(lunDay()),[]);
  
  const makeLunImg = date => {
    if(date < 2){
      return <div>🌚</div> // 삭
    }
    else if (date < 3){
      return <div>{`🌑 -> 🌒`}</div> // 삭 -> 초승 
    }
    else if (date < 5){
      return <div>🌒</div> // 초승
    }
    else if (date < 7){
      return <div>{`🌒 -> 🌓`}</div> // 초승 -> 상현
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
      return <div>{`🌗 -> 🌘`}</div> // 하현 -> 그믐
    }
    else if (date < 29){
      return <div>🌘</div> // 그믐
    }
    else if (date < 30){
      return <div>{`🌘 -> 🌚`}</div> // 그믐 -> 삭
    }
  };

  return (
    <div>
      {day.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='lunAge'>
          <div className='image'>{makeLunImg(day.data)}</div>
          <div className='date'>월령 {day.data}일</div>
        </div>
      )}
    </div>
  )
};

export default Lunday;