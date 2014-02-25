var DirectionsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Venue Directions</h2>Our ceremony and reception will be held at The Barn at Willseyville<br>1409 Ithaca Rd. Willseyville, NY 13864<br><iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=1409+Ithaca+Rd+13864&amp;aq=&amp;sll=42.09456,-76.226664&amp;sspn=0.028565,0.066047&amp;ie=UTF8&amp;hq=&amp;hnear=1409+Ithaca+Rd,+Willseyville,+New+York+13864&amp;t=m&amp;ll=42.322128,-76.396351&amp;spn=0.060922,0.109863&amp;z=13&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://www.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=1409+Ithaca+Rd+13864&amp;aq=&amp;sll=42.09456,-76.226664&amp;sspn=0.028565,0.066047&amp;ie=UTF8&amp;hq=&amp;hnear=1409+Ithaca+Rd,+Willseyville,+New+York+13864&amp;t=m&amp;ll=42.322128,-76.396351&amp;spn=0.060922,0.109863&amp;z=13&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small></p>');
	}
});