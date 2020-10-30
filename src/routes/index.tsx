import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import OrdersPlaced from '../pages/OrdersPlaced';
import OrderDetails from '../pages/OrderDetails';
import OrderNew from '../pages/OrderNew';
import OrderDetailing from '../pages/OrderDetailing';
import SelectClients from '../pages/SelectClients';
import AddOrderInformation from '../pages/AddOrderInformation';
import OrderFeedback from '../pages/OrderFeedback';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/ordersplaced" component={OrdersPlaced} />
			<Route path="/orderdetails" component={OrderDetails} />
			<Route path="/ordernew" component={OrderNew} />
			<Route path="/orderdetailing" component={OrderDetailing} />
			<Route path="/selectclients" component={SelectClients} />
			<Route
				path="/addorderinformation"
				component={AddOrderInformation}
			/>
			<Route path="/orderfeedback" component={OrderFeedback} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
