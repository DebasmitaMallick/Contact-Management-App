import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface for a contact
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

// Interface for the state, which holds an array of contacts
interface ContactsState {
  contacts: Contact[];
}

// Initial state: starts with an empty list of contacts
const initialState: ContactsState = {
  contacts: [],
};

// Creating a slice for contacts with add, delete, and update actions
const contactsSlice = createSlice({
  name: 'contacts', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for adding a new contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload); // Adds the new contact to the array
    },
    
    // Reducer for deleting a contact by id
    deleteContact: (state, action: PayloadAction<number>) => {
      // Filters out the contact with the given id
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    
    // Reducer for updating an existing contact
    updateContact: (state, action: PayloadAction<Contact>) => {
      // Finds the index of the contact to be updated
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      
      // If contact is found, update it
      if (index !== -1) {
        console.log(state.contacts[index]); // Optional: logs the current contact before update
        state.contacts[index] = action.payload; // Replaces the old contact with the updated one
      }
    },
  },
});

// Export the reducer to be included in the store
export default contactsSlice.reducer;

// Export the actions for use in the app (e.g., dispatching add, delete, update actions)
export const contactActions = contactsSlice.actions;