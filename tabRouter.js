var tabRouter = Backbone.Router.extend({
	routes: {
		'info' : 'importantInfo',
		'directions' : 'directions',
		'accomodations' : 'accomodations',
		'registry' : 'registry',
		'questions' : 'questions',
		'about' : 'aboutUs',
		'proposal' : 'proposal',
		'pictures' : 'pictures'
	},
	importantInfo : function(){
		var importantInfoView = new ImportantInfoView();
	},
	directions : function(){
		var directionsView = new DirectionsView();
	},
	accomodations : function(){
		var accomodationsView = new AccomodationsView();
	},
	registry : function(){
		var registryView = new RegistryView();
	},
	questions : function(){
		var questionsView = new QuestionsView();
	}

	},
	aboutUs : function(){
		var aboutUsView = new AboutUsView();
	},
	proposal : function(){
		var proposalView = new ProposalView();
	},
	pictures : function(){
		var picturesView = new PicturesView();
	}

});