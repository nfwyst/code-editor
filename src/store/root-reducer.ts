import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { darkModeReducer } from './slices/dark-mode';
import { filesReducer } from './slices/files';

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

const persistedReducers = persistReducer({ key: 'root', storage }, combinedReducers)

export default persistedReducers;
