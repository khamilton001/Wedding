var tabRouter = Backbone.Router.extend({
	routes: {
		'info' : 'importantInfo',
		'directions/' : 'directions',
		'accomodations/' : 'accomodations',
		'registry/' : 'registry',
		'about/:id' : 'aboutUs',
		'proposal/' : 'proposal',
		'pictures/' : 'pictures'
	},
	importantInfo : function(){
		var importantInfoView = new ImportantInfoView;
	},
	directions : function(){
		var directionsView = new DirectionsView;
	},
	accomodations : function(){
		var accomodationsView = new AccomodationsView;
	},
	registry : function(){
		var registryView = new RegistryView;
	},
	aboutUs : function(id){
		var aboutUsView = new AboutUsView();
	},
	proposal : function(){
		var proposalView = new ProposalView;
	},
	pictures : function(){
		var picturesView = new PicturesView;
	}

});