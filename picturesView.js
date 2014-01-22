var PicturesView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Pictures</h2>Pictures coming soon!</p>');
	}
});