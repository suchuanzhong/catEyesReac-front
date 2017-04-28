import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory,browserHistory} from "react-router";

import Index from "../antd/index/Index";
import Login from "../antd/login/Login";
import Users from "../antd/users/Users";
import Movies from "../antd/movies/Movies";
import CinemaLine from "../antd/cinemaLine/CinemaLine";
import CinemaMate from "../antd/cinemaMate/CinemaMate";
import HotMovie from "../antd/hotMovie/HotMovie";
import UpMovie from "../antd/upMovie/UpMovie";
import Manage from "../antd/index/Manage";

ReactDOM.render(<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute path="/login" component={Login}></IndexRoute>
			<Route path="/login" component={Login}></Route>
			<Route path="/manage" component={Manage}>
				<Route path="/users" component={Users}></Route>
				<Route path="/movies" component={Movies}></Route>
				<Route path="/cinemaLine" component={CinemaLine}></Route>
				<Route path="/cinemaMate" component={CinemaMate}></Route>
				<Route path="/hotMovie" component={HotMovie}></Route>
				<Route path="/upMovie" component={UpMovie}></Route>
			</Route>
		</Route>
	</Router>,document.getElementsByTagName("body")[0]);