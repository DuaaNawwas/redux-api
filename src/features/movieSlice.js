import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	movies: [],
};

const APIURL =
	"https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
	try {
		const res = await axios.get(APIURL);
		return [...res.data.results];
	} catch (err) {
		return err.message;
	}
});

export const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// addMovies: (state, action) => {
		// 	return { ...state, movies: action.payload };
		// },
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
	extraReducers(builder) {
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			const movies = action.payload;
			state.movies = state.movies.concat(movies);
			// or return { ...state, movies: action.payload };
		});
	},
});

// Action creators are generated for each case reducer function
export const { addMovies, deleteMovie, addMovie } = movieSlice.actions;

export default movieSlice.reducer;
