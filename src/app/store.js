import { configureStore } from "@reduxjs/toolkit";
import pokusReducer from "../features/pokus/pokusSlice";

export default configureStore({
  reducer: {
    pokus: pokusReducer,
  },
});
