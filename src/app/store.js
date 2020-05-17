import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokusReducer from '../features/pokus/pokusSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokus: pokusReducer,
  },
});
