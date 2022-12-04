import Movies from "./features/Movies";

import AddMovie from "./features/AddMovie";

function App() {
	return (
		<div className="flex gap-32 items-start px-10">
			<Movies />
			<AddMovie />
		</div>
	);
}

export default App;
