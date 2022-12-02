import { configureStore } from '@reduxjs/toolkit'
import playlistReducer from './playlist.slice';

export const store = configureStore({
    reducer: {
        playlistReducer
    },
})

export default store;