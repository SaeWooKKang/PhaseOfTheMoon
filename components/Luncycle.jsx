import React, { useEffect } from "react";
import { lunCycle } from "../redux/actions/lunCycleAction";
import { useDispatch, useSelector } from "react-redux";

const Luncycle = () => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector(state => state.lun.cycle);
  
  useEffect(() => {dispatch(lunCycle())}, []);
  
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="lunCycle">
          <div className="cycle">
            <div className="moonrise">월출: {data  && data.moonrise}</div>
            <div className="moontransit">월중: {data  && data.moontransit}</div>
            <div className="moontset">월몰: {data  && data.moonset}</div>
          </div>
        </div>
        
      )}
    </div>)
};

export default Luncycle;