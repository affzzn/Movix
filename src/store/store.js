import {configureStore} from '@reduxjs/toolkit'

import moviesReducer from './slices/movieSlice'
import seriesReducer from './slices/seriesSlice'
import detailReducer from './slices/detailSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        detail: detailReducer
    }
})