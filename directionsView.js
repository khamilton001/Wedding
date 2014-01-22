var DirectionsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Venue Directions</h2>Our ceremony and reception will be held at The Barn at Willseyville<br>1409 Ithaca Rd. Willseyville, NY 13864<br><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;hl=en&amp;q=1409+Ithaca+Rd+13864&amp;ie=UTF8&amp;om=1&amp;hq=&amp;hnear=1409+Ithaca+Rd,+Willseyville,+New+York+13864&amp;t=m&amp;z=10&amp;ll=42.309815,-76.400986&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;hl=en&amp;q=1409+Ithaca+Rd+13864&amp;ie=UTF8&amp;om=1&amp;hq=&amp;hnear=1409+Ithaca+Rd,+Willseyville,+New+York+13864&amp;t=m&amp;z=10&amp;ll=42.309815,-76.400986&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small></p>');
	}
});