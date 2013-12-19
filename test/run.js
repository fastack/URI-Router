var Router = require('../lib/router.js')

function TestRouter(router){
	this.router = new router();

	this.testAddRoute = function(newRoutes){
		this.router.addRoute(newRoutes);
		for(key in newRoutes){
			if (this.router.routes[key] != newRoutes[key])
				return false;
		}
		console.log("add routes successful");
		return true;
	}

	return this;
}

test = new TestRouter(Router);

