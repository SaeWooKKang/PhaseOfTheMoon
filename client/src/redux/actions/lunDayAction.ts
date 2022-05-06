import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LUN_HOST } from '../../config';

export type LunDayResponse = number; 

export const lunDay = createAsyncThunk(
  "lun/day",
  async (): Promise<LunDayResponse> => {    
    const response = await axios.get(`${LUN_HOST}lun/day`)
      .then(res => res.data.items.item.lunAge)
      .catch(err => console.log(err));

    return response;
  }
);
