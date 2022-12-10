import { createSlice } from '@reduxjs/toolkit'
import axios from 'src/utils/axios'

export const musicDetailReducer = createSlice({
    name: 'musicDetail',
    initialState: {
        musicDetail: [],
        musicRef: []
    },
    reducers: {
        setMusicdDetail: (state, action) => {
            state.musicDetail = action.payload
        },
        setMusicRef: (state, action) => {
            state.musicRef = action.payload
            console.log('action.payload', action.payload);
        },
    },
})

export const { setMusicdDetail, setMusicRef } = musicDetailReducer.actions

export const getMusicDetail = (id) => async (dispatch) => {
    try {
        const response = await axios.get('/music', { params: { id } })
        dispatch(setMusicdDetail(response.data))
    } catch (error) {
        console.log('error in musicDetail slice', error);
    }
}

export const changeMusicRef = (data) => (dispatch) => {
    try {
        dispatch(setMusicRef(data))
    } catch (error) {
        console.log('error in musicDetail slice in ref', error);
    }
}

export default musicDetailReducer.reducer