import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from '../page/Details';
import Characters from '../page/Characters';
import NotFound from '../components/erroresComponent/NotFound';
import Comic from '../page/Comic';
import { BrowserRouter } from 'react-router-dom';
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
