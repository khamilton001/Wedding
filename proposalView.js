var ProposalView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render;
	},
	render: function(){
		this.$el.empty().append("<p>One fine day in may, Josh took Kat to Fairmount Park for a picnic.  They spread out blankets and ate sandwiches.  While laying on the blanket together, Josh sneakily took an engagement ring out of his pocket.  He said to Kat that he had something for her.  She thought it was chocolate.  He pulled out the ring and she reacted by exclaiming OMG are you proposing right now??</p>");
	}
});