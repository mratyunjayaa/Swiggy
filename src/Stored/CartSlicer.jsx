import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartslice',
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    IncreaseItems: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    DecreaseItems: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    }
  }
});

export const { addItems, IncreaseItems, DecreaseItems } = cartSlice.actions;
export default cartSlice.reducer;