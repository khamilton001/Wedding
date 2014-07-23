var RegistryView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><h2>Registry</h2><p>We have registries with Kohl\'s and Zola.  Click on the logos to visit our registries!</p><br><a href="http://www.kohls.com/upgrade/gift_registry/kohlsgrw_home.jsp?section=list&listid=2650492&viewtype=listview&isfromsearch=true&fname=katherine&lname=hamilton&regtype=registry.wedding,registry.baby,registry.splday"><img src="Kohlslogo.jpg" alt="Kohls" align="middle"></a><br><br><a href="http://zola.com/registry/katherineandjoshua"><img src="zolalogo.jpg" alt="Zola"></a>.<br><br><p>Please make sure that when you purchase an item it is removed or marked as purchased on the registry.  Thank you!</p></p>');
	}
});