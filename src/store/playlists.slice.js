import { createSlice } from '@reduxjs/toolkit'
import axios from 'src/utils/axios';


export const playlistReducer = createSlice({
    name: 'playlist',
    initialState: {
        playlists: [],
        playlistDetail: []
    },
    reducers: {
        setPlaylist: (state, action) => {
            state.playlists = action.payload
        },
        setPlaylistDetail: (state, action) => {
            state.playlistDetail = action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount, setPlaylist, setPlaylistDetail } = playlistReducer.actions;

export const fetchPlaylistDetail = (id) => async (dispatch) => {
    try {
        const response = await axios.get('/playlists', { params: { id } });
        dispatch(setPlaylistDetail(response.data))
    } catch (err) {
        console.log(err);
    }
};

export const fetchPlaylist = () => async (dispatch) => {
    // dispatch(usersLoading())
    try {
        const response = await axios.get('/playlists');
        // dispatch({ type: 'playlist/setPlaylist', payload: response.data })
        dispatch(setPlaylist(response.data))
    } catch (error) {
        console.log(error);
    }
}

export default playlistReducer.reducer