var AccomodationsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Accomodations</h2>We will be reserving hotel blocks in the area soon.  Check back for hotel information and directions!</p>');
	}
});