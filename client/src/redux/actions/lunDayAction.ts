import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LOCAL_3000 } from '../../config';

export const lunDay = createAsyncThunk(
  "lun/day",
  async (data, thunkAPI) => {    
    const response = await axios.get(`${LOCAL_3000}lun/day`)
      .then(res => res.data.items.item.lunAge)
      .catch(err => console.log(err));

    return response as number;
  }
);
