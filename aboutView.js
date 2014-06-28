var AboutUsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>About Us</h2></p><div class="row"><div class="col-lg-2"><p><img src="josh.jpg" alt="..." class="img-thumbnail"><br><br><br><img src="kat.JPG" alt="..." class="img-thumbnail"></div><div class="col-lg-8"><strong>Josh Wickman</strong><br>Josh grew up in Endicott, NY.  After completing his bachelor\'s degree in physics, he moved to Newark, DE to pursue his Ph.D. in particle physics and cosmology.  He completed his degree in August 2013 was teaching physics courses at Gloucester County College in NJ up until recently.  Josh is currently working as a database engineer for a tech company in NYC!<br><br><br><br><strong>Kat Hamilton</strong><br>Kat is originally from Sussex, NJ.  She completed her bachelor\'s in music at Drew University and moved to Philadelphia to get her master\'s in music education from University of the Arts.  She left her job teaching 3 and 4 year olds at a private preschool in Philadelphia and is currently looking for an education job in the Big Apple.<br><br><br>Josh and Kat met at a mutual friend\'s Christmas party in 2009.  They reconnected on a canoeing trip in Vermont in July 2010 and started dating shortly after.  As of July 1st, they are relocating to NYC to pursue different career opportunities and be fancy city people.  Together, Josh and Kat enjoy playing music, cooking tasty meals and making their own beer.</p></div></div>');
	}
});