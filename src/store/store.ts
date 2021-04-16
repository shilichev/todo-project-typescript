
import {  configureStore } from '@reduxjs/toolkit';
import * as reducers from './reducers';


const store = configureStore(
  reducers, 
);

export default store;

