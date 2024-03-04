import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    detail: {}
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        addDetail: ((state, action) => {
            state.detail = action.payload
        }),
        cleanDetail: ((state, action) => {
            state.detail = {}
        })
    }
})



export const {addDetail, cleanDetail} = detailSlice.actions
export default detailSlice.reducer