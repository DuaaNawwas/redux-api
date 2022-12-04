import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: [],
};

export const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addMovies: (state, action) => {
			return { ...state, movies: action.payload };
		},
		addMovie: (state, action) => {
			const movie = { ...action.payload, id: state.movies.length + 1 };
			const data = [...state.movies, movie];
			return { ...state, movies: data };
		},

		deleteMovie: (state, action) => {
			const newArr = state.movies.filter((i) => i.id != action.payload);
			return { ...state, movies: newArr };
		},
	},
});

// Action creators are generated for each case reducer function
export const { addMovies, deleteMovie, addMovie } = movieSlice.actions;

export default movieSlice.reducer;
