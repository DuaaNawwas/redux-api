import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovies, deleteMovie } from "./movieSlice";
export default function Movies() {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteMovie(id));
	};
	const movies = useSelector((state) => state.movie.movies);
	console.log(movies);
	const APIURL =
		"https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=2587fe27ddb1758c80e76c271cedfd75&page=1";
	useEffect(() => {
		axios.get(APIURL).then((res) => {
			console.log(res.data.results);
			dispatch(addMovies(res.data.results));
		});
	}, []);

	return (
		<>
			<div className="w-2/3 py-10">
				<Table>
					<Table.Head>
						<Table.HeadCell>Movie</Table.HeadCell>
						<Table.HeadCell>Release Date</Table.HeadCell>
						<Table.HeadCell>Rating</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{movies?.map((movie, i) => {
							return (
								<Table.Row
									key={i}
									className="bg-white dark:border-gray-700 dark:bg-gray-800"
								>
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{movie.title}
									</Table.Cell>
									<Table.Cell>{movie.release_date}</Table.Cell>
									<Table.Cell>{movie.vote_average}</Table.Cell>
									<Table.Cell>
										<button
											onClick={() => handleDelete(movie.id)}
											className="text-red-500"
										>
											Delete
										</button>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
	);
}
