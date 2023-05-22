import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service.js";


export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
      const user = await authService.profile();
      
      return user;
    }
   );