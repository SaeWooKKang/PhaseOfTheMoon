import React, { useEffect } from "react";
import { lunCycle } from "../../redux/actions/lunCycleAction";
import { useDispatch, useSelector } from "react-redux";

const LunTime = () => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector(state => state.lun.cycle);

  useEffect(() => {dispatch(lunCycle())}, []);
  
  return (
    <div style={{width:'100%', margin: '0'}}>
      {isLoading ? <div>Loading...</div>
       : ( 
          <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'80%'}}>

              {/* 출 중 몰 */}
              {data && <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.8rem'}}>
                <div>월출 {data.moonrise}</div>
                <div>월중 {data.moontransit}</div>
                <div>월몰 {data.moonset}</div>
              </div>}
            </div>
          </div>
        )}
    </div>)
};

export default LunTime;