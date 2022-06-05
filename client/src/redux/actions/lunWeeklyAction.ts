import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LUN_HOST } from '../../config';
import { CycleResponse } from '../actions/lunCycleAction'

export type WeeklyResponse = CycleResponse[];

export const lunWeekly = createAsyncThunk(
  "lun/weekly",
  async (): Promise<WeeklyResponse> => {    
    const { data } = await axios.get(`${LUN_HOST}lun/weekly`);

    return data;
  }
);