import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import 'regenerator-runtime';
import { LOCAL_3000 } from "../../config";

export const lunCycle = createAsyncThunk(
  "lun/cycle",
  async (data, thunkAPI) => {
    const response = await axios.get(`${LOCAL_3000}lun/cycle`)
      .then(res => res.data.items.item)
      .catch(e => console.log(e));
    
    return response;
  }
);