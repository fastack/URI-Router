/* router.js */

function Router(routes){
	this.routes = routes;
}

Router.prototype.addRoute = function(newRoutes){
	for(k in newRoutes)
		this.routes[k] = newRoutes[k];
}

Router.prototype.route = function(uri){
	for(r in this.routes){
		var patt = new RegExp(r,"i");
		var result = uri.match(patt);
		if(result){
			print(result);
			break;
		}

	}
}
