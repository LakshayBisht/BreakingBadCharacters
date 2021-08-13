import React from 'react';

const CharacterCard = ({ character }) => {
	return (
		<div className='card'>
			<div className='card-inner'>
				<div className='card-front'>
					<img src={character.img} alt='' />
					<div className='overlay'>
						<h1>{character.name}</h1>
						<div className='hidden'>
							<ul>
								<li>
									<strong>Actor Name:</strong> {character.portrayed}
								</li>
								<li>
									<strong>Nickname:</strong> {character.nickname}
								</li>
								<li>
									<strong>Occupation:</strong> {character.occupation.join(', ')}
								</li>
								<li>
									<strong>Birthday:</strong> {character.birthday}
								</li>
								<li>
									<strong>Status:</strong> {character.status}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
