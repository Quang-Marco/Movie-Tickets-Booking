import { configureStore } from "@reduxjs/toolkit";
import seatSlice from "./seatSlice";

export const store = configureStore({
  reducer: { seatSlice },
});
