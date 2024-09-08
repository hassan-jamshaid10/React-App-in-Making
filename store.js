import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/Features/AuthSlice';
import onlineFriendsReducer from './src/Features/OnlineFriendSlice'
import chatReducer from  './src/Features/ChatSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    onlineFriends: onlineFriendsReducer,
    chat: chatReducer,
  },
});
