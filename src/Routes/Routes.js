import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from '../page/Details';
import choseeComic from '../page/choseeComics';
import Heroes from '../page/Heroes';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/comics/:id' component={choseeComic} />
			<Route exact path='/details/:comicId' component={Details} />
			<Route exact path='/' component={Heroes} />
			<Route path='*'>
				<h1> 404 Not Found</h1>
			</Route>
		</Switch>
	);
};

export default Routes;
