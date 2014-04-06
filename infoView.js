var ImportantInfoView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Information</h2>Here is a tentative schedule of events for the weekend:<br>Friday October 10<ul><li>Setup at The Barn beginning in early afternoon</li><li>Rehearsal at The Barn for wedding party</li><li>Rehearsal dinner at Hickories Park</li></ul><br>Saturday October 11<ul><li>2:30 PM Guest Seating</li><li>3 PM Ceremony - We get hitched!</li><li>3:30-4:30 PM Cocktail Hour</li><li>4:30-9:30 PM Reception - Dancing, eating, making merry!</li></ul><br>Sunday October 12<ul><li>Cleanup at The Barn - must be cleaned up and out before noon</li></ul><br>We\'ll be adding more information as it become available, so check back again soon!</p>');
	}
});