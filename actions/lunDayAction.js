import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';

export const lunDay = createAsyncThunk(
  "lun/day",
  async (data, thunkAPI) => {    
    const response = await axios.get('http://localhost:3000/GET/lun/day');
    
    return response.data.items.item.lunAge;
  }
);
