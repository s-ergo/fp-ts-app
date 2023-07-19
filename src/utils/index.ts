import axios from "axios";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";

const errorHandler = (error: string) => {
    console.log(error);
};

export const fetchData = (request: string) => {
    return pipe(
        TE.tryCatch(
            () => axios.get(request),
            (error) => new Error(String(error))
        ),
        TE.mapLeft((error) => {
            errorHandler(error.message);
            return error;
        }),
        TE.map((res) => res.data),
        TE.getOrElse(() => T.of([]))
    )();
};
