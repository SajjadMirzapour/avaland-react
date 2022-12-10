import { createSlice } from '@reduxjs/toolkit'

export const searchReducer = createSlice({
    name: 'search',
    initialState: {
        search: [],
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
    },
})

export const { setSearch } = searchReducer.actions

export const getSearchValue = (data) => (dispatch) => {
    console.log('data', data);
    dispatch(setSearch(data))
}

export default searchReducer.reducer