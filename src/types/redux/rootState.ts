import { store } from "../../data/redux/reducers";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch