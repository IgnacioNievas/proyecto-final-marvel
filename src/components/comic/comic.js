import React from 'react';

const Comic = ({ comic }) => {
	return (
		<>
			{comic.map((item) => (
				<div key={item.id}>
					<img
						src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
						alt={item.title}
					/>
					<div>
						<h1>{item.title}</h1>
						<p> {item.description}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Comic;
