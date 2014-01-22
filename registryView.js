var RegistryView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Registry</h2>We have an official registry with Kohls <a href="http://www.kohls.com/upgrade/gift_registry/kohlsgrw_home.jsp?section=list&listid=2650492&viewtype=listview&isfromsearch=true&fname=katherine&lname=hamilton&regtype=registry.wedding,registry.baby,registry.splday"><strong>here</strong></a>.  You can also search "Katherine Hamilton" and find us.<br><br>We also have a Zola registry for miscellaneous items from other websites <a href="https://www.zola.com/registry/katherineandjoshua"><strong>here</strong></a>.</p>');
	}
});