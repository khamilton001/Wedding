var AboutUsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><strong>About Us</strong></p><div class="row"><div class="col-lg-2"><p><img src="josh.jpg" alt="..." class="img-thumbnail"><img src="kat.JPG" alt="..." class="img-thumbnail"></div><div class="col-lg-8"><strong>Josh Wickman</strong><br>Josh grew up in Endicott, NY.  After completing his bachelor\'s degree in physics, he moved to Newark, DE to pursue his Ph.D. in particle physics and cosmology.  He completed his degree in August 2013 and currently teaches physics courses at Gloucester County College in NJ.<br><strong>Kat Hamilton</strong><br>Kat is originally from Sussex, NJ.  She completed her bachelor\'s in music at Drew University and moved to Philadelphia to get her master\'s in music education from University of the Arts.  She currently teaches 3 and 4 year olds at a private preschool in Center City.<br>Josh and Kat met at a mutual friend\'s Christmas party in 2009.  They reconnected on a canoeing trip in Vermont in July 2010 and started dating shortly after.  Together, Josh and Kat enjoy playing music, cooking tasty meals and making their own beer.</p></div></div>');
	}
});