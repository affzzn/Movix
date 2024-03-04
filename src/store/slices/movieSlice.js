import {createSlice} from '@reduxjs/toolkit'




const initialState = {
    movies : {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: ((state, action) => {
            state.movies = action.payload
        }),
        cleanMovie: ((state, action) => {
            state.movies = {}
        })
    }
})


export const {addMovie, cleanMovie} = movieSlice.actions
export default movieSlice.reducer