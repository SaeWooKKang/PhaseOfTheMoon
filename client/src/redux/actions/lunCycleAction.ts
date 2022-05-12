import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LUN_HOST } from "../../config";

export interface CycleResponse {
  astm: "string";
  aste: "string ";
  civile: "string";
  civilm: "string";
  latitude: 'number';
  latitudeNum: "string";
  location: "string";
  locdate: 'number';
  longitude: 'number';
  longitudeNum: "string";
  moonrise: "string";
  moonset: "string";
  moontransit: "string";
  naute: "string";
  nautm: "string";
  sunrise: "string";
  sunset: "string";
  suntransit: 'number';
}

/**
 * data {aste: '2112  ', astm: '0346459  '}
 * 값에 공백이 있네 
 * 순회해서 공백 없애야 함 
 * 
 */
export const lunCycle = createAsyncThunk(
  "lun/cycle",
  async (data, thunkAPI):Promise<CycleResponse> => {
    const response = await axios.get(`${LUN_HOST}lun/cycle`)
      .then(res => res.data.items.item)
      .catch(e => console.log(e));
    
      // console.log(response);
    return response;
  }
);