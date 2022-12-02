import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const playlistReducer = createSlice({
    name: 'playlist',
    initialState: { playlist: [] },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setPlaylist: (state, action) => {
            state.playlist = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setPlaylist } = playlistReducer.actions

export const fetchUsers = () => async (dispatch) => {
    // dispatch(usersLoading())
    try {
        const response = await axios.get('http://localhost:5000/playlists');
        // dispatch({ type: 'playlist/setPlaylist', payload: response.data })
        dispatch(setPlaylist(response.data))
        // context.commit('SET_PLAYLIST', response.data)
    } catch (error) {
        console.log(error);
    }
}


export default playlistReducer.reducer