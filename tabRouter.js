var tabRouter = Backbone.Router.extend({
	routes: {
		'info/:id' : 'importantInfo',
		'directions/:id' : 'directions',
		'accomodations/:id' : 'accomodations',
		'registry/:id' : 'registry',
		'about/:id' : 'aboutUs',
		'proposal/:id' : 'proposal',
		'pictures/:id' : 'pictures'
	},
importantInfo : function(id){
	var importantInfoView = new importantInfoView
},
directions : function(id){
	var directionsView = new directionsView
},
accomodations : function(id){
	var accomodationsView = new accomodationsView
},
registry : function(id){
	var registryView = new registryView
},
aboutUs : function(id){
	var aboutUsView = new aboutUsView
},
proposal : function(id){
	var proposalView = new proposalView
},
pictures : function(id){
	var picturesView = new picturesView
}

});