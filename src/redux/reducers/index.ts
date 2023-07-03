
import { languageReducer } from "./Language.reducer";
import { themeReducer } from "./Theme.reducer";
import { courseDetaliesReducer } from "./courseDetaliesReducer";
import { coursesReducer } from "./courses.reducers";

export const reducer={ 
    theme:themeReducer,
    language:languageReducer,
    courses:coursesReducer,
    courseDetalies:courseDetaliesReducer
}

