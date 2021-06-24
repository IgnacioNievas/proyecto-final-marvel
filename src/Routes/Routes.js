import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from '../page/details';
import Characters from '../page/characters';
import NotFound from '../components/errorescomponent/notfound';
import Comic from '../page/comic';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/details/:id/:name' component={Details} />
				<Route
					exact
					path={`/details/:id/:name/comic/:comicId/:name`}
					component={Comic}
				/>
				<Route exact path='/' component={Characters} />
				<Route path='*' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
