import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts'; // Import the reducer from the contacts module

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Add the contacts reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;