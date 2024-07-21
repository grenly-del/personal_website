import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 'pendidikan',
}

export const contentSlice = createSlice({
  name: 'contentAbout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    postData: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
})

export const { postData } = contentSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.contentAbout.value

export default contentSlice.reducer