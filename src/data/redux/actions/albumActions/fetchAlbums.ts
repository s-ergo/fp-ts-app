import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as A from "fp-ts/Array";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";

export const fetchAlbums = createAsyncThunk("get/albumsList", async (userId: string) => {
    return pipe(
        TE.tryCatch(
            () => axios.get(`/albums?userId=${userId}`),
            (error) => new Error(String(error))
        ),
        TE.chain(res => A.isNonEmpty(res.data) ? TE.right(res.data) : TE.left(new Error("Empty array"))),
        TE.getOrElse(() => T.of([]))
    )();
});