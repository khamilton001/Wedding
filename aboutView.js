var AboutUsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		router.on("route:about", this.render);
	},
	render: function(){
		this.$el.empty().append("<p>About Us - placeholder</p>");
	}
});