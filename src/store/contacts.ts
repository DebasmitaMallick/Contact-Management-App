import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      // console.log(JSON.stringify(state.contacts, null, 2))
      if (index !== -1) {
        console.log(state.contacts[index])
        state.contacts[index] = action.payload;
      }
    },
  },
});

export default contactsSlice.reducer;

export const contactActions = contactsSlice.actions;