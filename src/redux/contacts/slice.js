import { createSlice } from "@reduxjs/toolkit";
//import { createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
//import { selectNameFilter } from "./filtersSlice";

import { INITIAL_STATE } from "../contactsInitial";
 



 const handlePending = (state) => {
  state.loading = true;
};

 const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,

  

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
    }
    
});


export const contactsReducer = contactsSlice.reducer;