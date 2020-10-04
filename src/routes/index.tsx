import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import OrderDetails from '../pages/OrderDetails';
import OrderFeedback from '../pages/OrderFeedback';
import PaymentStatus from '../pages/PaymentStatus';
import SelectClients from '../pages/SelectClients';
import SelectProduct from '../pages/SelectProduct';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/" component={Home} />
			<Route path="/" component={OrderDetails} />
			<Route path="/" component={OrderFeedback} />
			<Route path="/" component={PaymentStatus} />
			<Route path="/" component={SelectClients} />
			<Route path="/" component={SelectProduct} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
