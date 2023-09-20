import { configureStore } from '@reduxjs/toolkit'
import playlistReducer from './playlists.slice';
import searchReducer from './search.slice';
import musicDetailReducer from './musicDetail.slice'
import playerReducer from './player.slice';
import likeReducer from './likedSongs.slice'

export const store = configureStore({
    reducer: {
        playlistReducer,
        searchReducer,
        musicDetailReducer,
        playerReducer,
        likeReducer
    },
})

export default store;