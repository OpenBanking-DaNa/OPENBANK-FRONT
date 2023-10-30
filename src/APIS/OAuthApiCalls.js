import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const bankList = createAsyncThunk(
    async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASIC_URL}`)
    }
)
