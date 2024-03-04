import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    series: {}
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        addSeries: ((state, action) => {
            state.series = action.payload
        }),
        cleanSeries: ((state, action) => {
            state.series = {}
        })
    }
})



export const {addSeries, cleanSeries} = seriesSlice.actions
export default seriesSlice.reducer