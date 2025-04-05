import { configureStore } from '@reduxjs/toolkit'
import discoverSlice from "./slicers/discoverSlice.js";
import detailsSlice from "./slicers/detailsSlice.js";
import searchSlice from "./slicers/searchSlice.js";

export const store = configureStore({
    reducer: {
        discover: discoverSlice,
        details: detailsSlice,
        search: searchSlice,
    },
})

