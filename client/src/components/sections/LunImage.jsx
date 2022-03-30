import React from "react";
import { useSelector } from "react-redux";
import { go } from 'fxjs';
import { useState, useEffect } from "react";

const LunImage = () => {
  const day = useSelector(({lun: {day}}) => day);
  const { data, isLoading} = useSelector(state => state.lun.cycle);

  const [time, setTime] = useState(0);

  const [top, setTop] = useState('0');
  const [bttm, setBttm] = useState('0');
  const [left, setLeft] = useState('0');
  const [right, setRight] = useState('0');

  const now2 = 400;

  // 현재 시간을 분으로 바꾸고 state에 저장
  useEffect(() => setTime(toMinute(now())), []);

  useEffect(() => {

    if (data) {
     
      let rise2 = toMinute(data.moonrise)
      let transit2 =  toMinute(data.moontransit)
      let set2 = toMinute(data.moonset)
      console.log(rise2, transit2, set2);
      
      now2 == rise2 ? (console.log(100), loc('9rem','4rem', 0, 0))
        : now2 < transit2 ? (console.log(200), loc('4rem', '3rem', 0, 0))
        : now2 == transit2 ? (console.log(300), loc('2rem', 0, '0', 0))
        : now2 < set2 ? (console.log(400), loc('4rem', '0', '0', '4rem'))
        : now2 == set2 ? (console.log(5), loc('9rem', 0, 0, '7rem'))
        : console.log('달 못봅니다')
    }
  }, [data]);

  // typeof data.moonset  // string
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

  const add = (a, b) => a + b;
  const numSubstr = (start, end, t) => Number(t.substring(start, end));

  const toMinute = t => 
    add(numSubstr(0, 2, t) * 60,  numSubstr(2, 4, t));

  // 2132
  const now = () => go(
      new Date(),
      d => add(String(d.getHours()), String(d.getMinutes())));

  const loc = (top, right, bttm, left) => {
    setTop(top);
    setRight(right);
    setBttm(bttm);
    setLeft(left);
  }

  return !(day.isLoading) && ( 
    <div style={{width:'100%', margin: '0'}}>      
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'80%'}}>

          {/* 달 위치 */}
          <div style={{
            display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
            <div style={{position:'relative', fontSize:'3rem',
              right:right, top:top, bottom:bttm, left:left,
              }}>{makeLunImg(day.data)}</div>
          </div>

          <div style={{
            border:'0.5px solid black',
            width: '53vw',
            height: '26vw',
            borderRadius:'26vw 26vw 0 0 '
          }}></div>

        </div>
      </div>
  </div>
    )
    
};

export default LunImage;