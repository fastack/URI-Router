/* router.js */

function Router(routes){
	this.routes = routes;

	return this;
}

Router.prototype.addRoute = function(newRoutes){
	for(k in newRoutes)
		this.routes[k] = newRoutes[k];
}

Router.prototype.route = function(uri){
	for(r in this.routes){
		var result = uri.match(new RegExp(r, "i"));
		if(result){return result;}

	}
}

module.exports = Router;