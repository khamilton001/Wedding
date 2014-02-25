var ImportantInfoView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Information</h2>We\'re still working out some details about our ceremony and reception!  Please check back for more information.  We\'ll have it all soon, we promise!</p>');
	}
});