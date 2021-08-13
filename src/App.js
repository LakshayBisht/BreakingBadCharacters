import { useState } from 'react';
import CustomPagination from './components/CustomPagination';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import SearchBar from './components/SearchBar';
import useSearch from './useSearch';
import Header from './components/Header';

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [query, setQuery] = useState({ name: '', category: '' });
	const { loading, error, characters, length, totalPages } = useSearch(
		query.name,
		query.category,
		pageNumber
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setQuery((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className='App'>
			<Header />
			<SearchBar query={query} handleChange={handleChange} />
			{error ? (
				<>
					<h1>Something went Wrong!!!</h1>
					<p>{error}</p>
				</>
			) : (
				<>
					<CharacterGrid loading={loading} characters={characters} />
					<CustomPagination
						length={length}
						pageNumber={pageNumber}
						setPageNumber={setPageNumber}
						totalPages={totalPages}
					/>
				</>
			)}
		</div>
	);
}

export default App;
