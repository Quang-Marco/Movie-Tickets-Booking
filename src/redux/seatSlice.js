import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seats: [
    // Hàng A - Regular
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `A${i + 1}`,
      status: "regular",
      price: 100000,
    })),
    // Hàng B - Regular
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `B${i + 1}`,
      status: "regular",
      price: 100000,
    })),
    // Hàng C - Regular
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `C${i + 1}`,
      status: "regular",
      price: 100000,
    })),
    // Hàng D - VIP
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `D${i + 1}`,
      status: "vip",
      price: 130000,
    })),
    // Hàng E - VIP
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `E${i + 1}`,
      status: "vip",
      price: 130000,
    })),
    // Hàng F - VIP
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `F${i + 1}`,
      status: "vip",
      price: 130000,
    })),
    // Hàng G - VIP
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `G${i + 1}`,
      status: "vip",
      price: 130000,
    })),
    // Hàng H - Sweetbox
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `H${2 * i + 1} H${2 * i + 2}`,
      status: "sweetbox",
      price: 280000,
    })),
  ],
  selectedSeats: [],
};

const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      const seatId = action.payload;
      if (!state.selectedSeats.includes(seatId)) {
        state.selectedSeats.push(seatId);
      }
    },
    deselectSeat: (state, action) => {
      const seatId = action.payload;
      state.selectedSeats = state.selectedSeats.filter((id) => id !== seatId);
    },
    resetSeats: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { selectSeat, deselectSeat, resetSeats } = seatsSlice.actions;
export default seatsSlice.reducer;
