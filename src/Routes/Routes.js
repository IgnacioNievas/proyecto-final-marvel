import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from '../page/Details';
import Heroes from '../page/Heroes';
import NotFound from '../components/erroresComponent/NotFound';
import Comic from '../page/Comic';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/details/:id/:name' component={Details} />
			<Route
				exact
				path={`/details/:id/:name/comic/:comicId/:name`}
				component={Comic}
			/>
			<Route exact path='/' component={Heroes} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
};

export default Routes;
