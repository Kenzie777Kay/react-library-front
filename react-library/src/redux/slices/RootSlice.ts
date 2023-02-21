import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author: 'Author',
        title: 'Title',
        language: 'Language',
        publisher: 'Publisher',
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseLanguage: (state, action) => { state.language = action.payload},
        choosePublisher: (state, action) => { state.publisher = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseTitle, chooseLanguage, choosePublisher } = rootSlice.actions;