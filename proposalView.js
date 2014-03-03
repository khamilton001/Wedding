var ProposalView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<h2>The Proposal</h2><p>One fine day in May, Josh took Kat to Fairmount Park for a picnic.  They spread out blankets and ate sandwiches.  While laying on the blanket together, chatting about the ins and outs of World of Warcraft, Josh sneakily took an engagement ring out of his pocket. He was waiting for the perfect moment to surprise her with it, but she kept foiling his well-laid plans by changing the subject and changing position on the blanket.<br><br>Finally, Kat reached for her lunch box to get out the popsicles they had packed for dessert.  Josh said to Kat that he had something for her.  She, in her infinite wisdom and bottomless stomach, thought it was a chocolate bar.  He reached behind his back and pulled out the ring. Josh carefully placed the box on the blanket in front of her and opened it.<br><br>Kat reacted by exclaiming "<strong>Oh my God...are you proposing right now?!</strong>"  Josh replied "...yes?  Will you...marry me?".  Kat immediately said yes, and they ran off to frolic in the gardens of the Japanese House at Fairmount Park.<img src="japanesehouse.jpeg" alt="..."</p>');
	}
});