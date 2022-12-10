import { createSlice } from '@reduxjs/toolkit'

export const musicReducer = createSlice({
    name: 'music',
    initialState: {
        isPlayingMusic: false,
        showPauseIcon: true,
    },
    reducers: {
        setPlayingMusic: (state) => {
            state.isPlayingMusic = true
            state.showPauseIcon = !state.showPauseIcon
        },
    },
})

export const { setPlayingMusic } = musicReducer.actions

export const playingMusicControl = () => async (dispatch) => {
    dispatch(setPlayingMusic())
}

export default musicReducer.reducer