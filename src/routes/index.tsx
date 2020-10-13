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
			<Route path="/home" component={Home} />
			<Route path="/orderdetails" component={OrderDetails} />
			<Route path="/orderfeedback" component={OrderFeedback} />
			<Route path="/paymentstatus" component={PaymentStatus} />
			<Route path="/selectclients" component={SelectClients} />
			<Route path="/selectproduct" component={SelectProduct} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
