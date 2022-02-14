import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';

export const lunCycle = createAsyncThunk(
  "lun/cycle",
  async (data, thunkAPI) => {
    const response = await axios.get('http://localhost:3000/GET/lun/cycle');
    
    return response.data.items.item;
  }
);