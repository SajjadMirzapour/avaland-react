import { createSlice } from '@reduxjs/toolkit'

export const playerReducer = createSlice({
    name: 'player',
    initialState: {
        isPlayingMusic: false,
        isPlayingPlaylist: false,
        showPauseIcon: true,
    },
    reducers: {
        setPlayingMusic: (state) => {
            state.isPlayingPlaylist = false
            state.isPlayingMusic = true
            state.showPauseIcon = !state.showPauseIcon
        },
        // hidePlayingMusic: (state) => {
        //     state.isPlayingMusic = false
        // },
        setPlayingPlaylist: (state) => {
            state.isPlayingMusic = false
            state.isPlayingPlaylist = true
            // state.showPauseIcon = !state.showPauseIcon
        },
        setPlayingPlaylistPause: (state) => {
            state.showPauseIcon = !state.showPauseIcon
        },
    },
})

export const { setPlayingMusic, setPlayingPlaylist, setPlayingPlaylistPause } = playerReducer.actions

export const playingMusicControl = () => async (dispatch) => {
    dispatch(setPlayingMusic())
}

export const playingPlaylistControl = () => async (dispatch) => {
    dispatch(setPlayingPlaylist())
}

export const playingPlaylistPause = () => async (dispatch) => {
    dispatch(setPlayingPlaylistPause())
}


export default playerReducer.reducer