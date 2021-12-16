import { configureStore } from '@reduxjs/toolkit';
import datasReducer from '../components/DataSlice';


export default configureStore({
  reducer: {
    datas : datasReducer
  }
});
