var ImportantInfoView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Information</h2>Information about the venue, hotels, other important information</p>');
	}
});