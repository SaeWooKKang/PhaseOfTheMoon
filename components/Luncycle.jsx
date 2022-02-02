import React, { useEffect } from "react";
import { lunCycle } from "../actions/lunCycleAction";
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
        <div>
          <div>월출: {data  && data.moonrise}</div>
          <div>월중: {data  && data.moontransit}</div>
          <div>월몰: {data  && data.moonset}</div>
        </div>
      )}
    </div>)
};

export default Luncycle;