import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import MovieApi from '../../common/Api/MovieApi'
// import { APIKey } from '../../common/Api/MovieApiKey'



// export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
//     const movieText = "Harry"
//     const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
//     return response.data
    
// })




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
    },
    // extraReducers: {
    //     [fetchAsyncMovies.pending] : (state,action) => {
    //         console.log('pending');
    //     },
    //     [fetchAsyncMovies.fulfilled]: (state, action) => {
    //         console.log('fulfilled');
    //         return {...state, movies: action.payload}
    //     },
    //     [fetchAsyncMovies.rejected]: (state, action) => {
    //         console.log('rejected');
    //     }
    // }
})


export const {addMovie, cleanMovie} = movieSlice.actions
export default movieSlice.reducer