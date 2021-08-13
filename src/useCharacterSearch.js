import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacterSearch = (name, category, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [characters, setCharacters] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setCharacters([]);
	}, [name, category]);

	useEffect(() => {
		const api = {
			// url: 'https://api.flickr.com/services/rest',
			url: 'https://www.breakingbadapi.com/api/',
		};
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: 'GET',
			url: api.url,
			params: {
				name,
				category,
				limit: 10,
				offset: (pageNumber - 1) * 10,
				// page: pageNumber,
			},
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				setCharacters((prev) => [
					...new Set([
						...prev,
						...res.data.photos.photo.map((p) => ({
							id: p.id,
							url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`,
						})),
					]),
				]);
				setHasMore(res.data.photos.photo.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setLoading(false);
				setError(true);
			});
		return () => cancel();
	}, [name, category, pageNumber]);

	return { loading, error, characters, hasMore };
};

export default useCharacterSearch;
