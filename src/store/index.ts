import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts'; // Importing the reducer from the contacts module

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Adding the contacts reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;