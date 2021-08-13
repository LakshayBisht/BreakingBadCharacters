import React from 'react';
import CharacterCard from './CharacterCard';
import loadingGIF from './../assets/loading.gif';

const CharacterGrid = ({ characters, loading }) => {
	return loading ? (
		<div className='center'>
			<img src={loadingGIF} alt='loading...' width='50px' />
		</div>
	) : (
		<section className='cards'>
			{characters.map((ch) => (
				<CharacterCard key={ch.char_id} character={ch}></CharacterCard>
			))}
		</section>
	);
};

export default CharacterGrid;
