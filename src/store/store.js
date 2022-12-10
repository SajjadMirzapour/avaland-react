import { configureStore } from '@reduxjs/toolkit'
import playlistReducer from './playlists.slice';
import searchReducer from './search.slice';
import musicDetailReducer from './musicDetail.slice'
import musicReducer from './music.slice';
import playerReducer from './player.slice';

export const store = configureStore({
    reducer: {
        playlistReducer,
        searchReducer,
        musicDetailReducer,
        musicReducer,
        playerReducer
    },
})

export default store;