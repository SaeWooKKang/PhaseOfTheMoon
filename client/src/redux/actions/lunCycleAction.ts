import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LOCAL_3000 } from "../../config";

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

export const lunCycle = createAsyncThunk(
  "lun/cycle",
  async (data, thunkAPI) => {
    const response = await axios.get(`${LOCAL_3000}lun/cycle`)
      .then(res => res.data.items.item)
      .catch(e => console.log(e));
    
    return response as CycleResponse;
  }
);