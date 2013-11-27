var AboutUsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append("<p>About Us - placeholder</p>");
	}
});