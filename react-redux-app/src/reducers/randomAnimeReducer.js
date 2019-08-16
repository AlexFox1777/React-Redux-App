import {
    FETCH_ANIME_DATA,
} from '../actions'

const initialState = {
    canonicalTitle: "",
    synopsis: "synopsis",
    averageRating: "averageRating",
    status: "",
    totalLength: "",
    image: ""
};

export const randomResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANIME_DATA:
            return {
                ...state,
                canonicalTitle: action.payload.canonicalTitle,
                synopsis:  action.payload.synopsis,
                averageRating: action.payload.averageRating,
                status: action.payload.status,
                totalLength: action.payload.totalLength,
                image: action.payload.posterImage.small,
            };
        case 'ANIME_DATA':
            return {
                ...state
            };
        default:
            return state;
    }
};