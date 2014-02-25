var AccomodationsView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Accomodations</h2>We have reserved a block at the <a href=http://hamptoninn3.hilton.com/en/hotels/new-york/hampton-inn-owego-BGMOWHX/index.html><strong>Hampton Inn Owego</strong></a><br>1030 Route 17C, Owego, NY 13827<br>(607) 687-4600<br>The cutoff date for making a reservation is 9/10/14!  Another possibility for accomodations is <a href=http://www.townofowego.com/hprates.html><strong>Hickories Park</strong></a>.  It\'s first come, first served tent or RV camping for reasonable rates.  Ithaca also has many B&B\'s that are very nice!  Keep in mind that our wedding weekend is the same weekend as Ithaca College\'s homecoming, so accomodations in Ithaca will be snatched up quick.</p>');
	}
});