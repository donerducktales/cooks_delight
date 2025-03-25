import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
   value: string;
   result: any[];
}

const initialState: SearchState = {
   value: '',
   result: [],
}

export const fetchResults = createAsyncThunk(
   'search/fetchResults',
   async (searchValue: string) => {
      const response = await fetch(`/api/search?searchValue=${searchValue}`);
      const data = await response.json();
      return data;
   }
)

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setSearchValue: (state, action: PayloadAction<string>) => {
         state.value = action.payload;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchResults.fulfilled, (state, action) => {
            state.result = JSON.parse(JSON.stringify(action.payload));
         })
   },
})

export default searchSlice.reducer;
export const { setSearchValue } = searchSlice.actions;