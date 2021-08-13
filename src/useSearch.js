import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = (name, category, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [characters, setCharacters] = useState([]);
	const charactersPerPage = 12;
	const baseIndex = (pageNumber - 1) * charactersPerPage;

	const url = 'https://www.breakingbadapi.com/api/characters';

	useEffect(() => {
		let cancel;
		const getCharacters = async () => {
			setLoading(true);
			setError(false);
			try {
				const result = await axios({
					method: 'GET',
					url: url,
					params: {
						name,
						category,
					},
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setLoading(false);
				setCharacters(result.data);
			} catch (e) {
				if (axios.isCancel(e)) return;
				setLoading(false);
				setError(true);
			}
		};
		getCharacters();
		return () => cancel();
	}, [name, category]);

	return {
		characters: characters.slice(baseIndex, baseIndex + charactersPerPage),
		loading,
		error,
		length: characters.length,
		totalPages: Math.ceil(characters.length / charactersPerPage),
	};
};

export default useSearch;
