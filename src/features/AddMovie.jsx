import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";
export default function AddMovie() {
	const dispatch = useDispatch();
	const [movieData, SetMovieData] = useState({
		title: "",
		release_date: "",
		vote_average: "",
	});
	const movies = useSelector((state) => state.movies.movies);
	console.log("==========");
	console.log(movies);
	console.log("movies");
	const handleAddMovie = (e) => {
		e.preventDefault();

		dispatch(addMovie(movieData));
		console.log(movieData);
		SetMovieData({
			title: "",
			release_date: "",
			vote_average: "",
		});
	};
	return (
		<form
			onSubmit={handleAddMovie}
			className="flex flex-col gap-4 w-1/3 sticky top-10"
		>
			<div>
				<h1 className="text-lg font-bold text-center">Add a new movie</h1>
				<div className="mb-2 block">
					<Label htmlFor="name" value="Movie Name" />
				</div>
				<TextInput
					id="name"
					type="text"
					placeholder=""
					required={true}
					shadow={true}
					value={movieData.title}
					onChange={(e) =>
						SetMovieData({ ...movieData, title: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="accnum" value="Release Date" />
				</div>
				<TextInput
					id="accnum"
					type="date"
					required={true}
					shadow={true}
					value={movieData.release_date}
					onChange={(e) =>
						SetMovieData({ ...movieData, release_date: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="acctype" value="Rating" />
				</div>
				<TextInput
					id="acctype"
					type="text"
					required={true}
					shadow={true}
					value={movieData.vote_average}
					onChange={(e) =>
						SetMovieData({ ...movieData, vote_average: e.target.value })
					}
				/>
			</div>

			<Button type="submit">ADD</Button>
		</form>
	);
}
