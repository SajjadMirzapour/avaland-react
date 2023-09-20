import { createSlice } from '@reduxjs/toolkit'

export const likeReducer = createSlice({
    name: 'likedSongs',
    initialState: {
        likedSongsId: []
    },
    reducers: {
        setHandleLikeSongs: (state, action) => {
            if (state.likedSongsId.includes(action.payload)) {
                state.likedSongsId = state.likedSongsId.filter(id => id !== action.payload)
            } else {
                state.likedSongsId.push(action.payload)
            }
        },
    },
})

export const { setHandleLikeSongs } = likeReducer.actions

export const handleLikeSongs = (id) => async (dispatch) => {
    dispatch(setHandleLikeSongs(id))
}

export default likeReducer.reducer