/* router.js */

function Router(routes){
	this.routes = typeof routes !== 'undefined' ? routes : {};

	return this; // return instance when instantiating.
}

Router.prototype.addRoute = function(newRoutes){
	for(k in newRoutes)
		this.routes[k] = newRoutes[k];
	return this.routes;
}

Router.prototype.route = function(uri){
	for(r in this.routes){
		var result = uri.match(new RegExp(r, "i"));
		if(result){return result;}
	}return null;
}

module.exports = Router;