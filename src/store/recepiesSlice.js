import { createSlice } from '@reduxjs/toolkit'

const recepiesSlice = createSlice({
    name: 'recepies',
    initialState: [],
    reducers: {
        setData: (state, action) => {
            return action.payload
        }
    }
})

export default recepiesSlice