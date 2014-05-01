var ImportantInfoView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Information</h2>Our save-the-dates have been sent out!  We hope you enjoyed them.  If you found it a little confusing, <a href="https://en.wikipedia.org/wiki/Portal_(video_game)"><strong>this</strong></a> might help.  Everyone can expect a formal invitation to arrive in a few months.<br><br><strong>Music!</strong>  Our DJ has provided us with a guest request page.  Check it out <a href="http://westphalmusic.com/guest-request/"><strong>here</strong></a>!  The group name is katherine-josh, and there is no password required.  Each guest gets 5 requests, so have fun!  We are excited to see what people come up with.<br><br>Here is a tentative schedule of events for the weekend:<br><br><strong>Friday October 10</strong><ul><li>Setup at The Barn beginning in early afternoon</li><li>Rehearsal at The Barn for wedding party</li><li>Rehearsal dinner at Hickories Park</li></ul><br><strong>Saturday October 11</strong><ul><li>2:30 PM Guest Seating</li><li>3 PM Ceremony - We get hitched!</li><li>3:30-4:30 PM Cocktail Hour</li><li>4:30-9:30 PM Reception - Dancing, eating, making merry!</li></ul><br><strong>Sunday October 12</strong><ul><li>Cleanup at The Barn - must be cleaned up and out before noon</li></ul><br>We\'ll be adding more information as it becomes available, so check back again soon!</p>');
	}
});