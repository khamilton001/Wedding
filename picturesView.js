var PicturesView = Backbone.View.extend({
	el: $('#display'),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.empty().append('<p><div id="blueimp-gallery" class="blueimp-gallery"><div class="slides"></div><h3 class="title"></h3><a class="prev">‹</a><a class="next">›</a><a class="close">×</a><a class="play-pause"></a><ol class="indicator"></ol><div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" aria-hidden="true">&times;</button><h4 class="modal-title"></h4></div><div class="modal-body next"></div><div class="modal-footer"><button type="button" class="btn btn-default pull-left prev"><i class="glyphicon glyphicon-chevron-left"></i>Previous</button><button type="button" class="btn btn-primary next">Next<i class="glyphicon glyphicon-chevron-right"></i></button></div></div></div></div></div><div id="links"><a href="sunnykat.jpg" title="After the engagement" data-gallery><img src="minisunnykat.jpg" alt="After the engagement"></a><a href="joshgarden2.jpg" title="She said yes!" data-gallery><img src="minijoshgarden2.jpg" alt="She said yes!"></a><a href="japanesegarden1.jpg" title="Japanese Garden at Fairmount Park" data-gallery><img src="minijapanesegarden1.jpg" alt="Japanese Garden at Fairmount Park"></a><a href="japanesegarden2.jpg" title="Japanese Garden at Fairmount Park" data-gallery><img src="minijapanesegarden2.jpg" alt="Japanese Garden at Fairmount Park"></a><a href="japanesegarden3.jpg" title="Japanese Garden at Fairmount Park" data-gallery><img src="minijapanesegarden3.jpg" alt="Japanese Garden at Fairmount Park"></a><a href="japanesegarden4.jpg" title="Japanese Garden at Fairmount Park" data-gallery><img src="minijapanesegarden4.jpg" alt="Japanese Garden at Fairmount Park"></a><a href="japanesegarden5.jpg" title="Japanese Garden at Fairmount Park" data-gallery><img src="minijapanesegarden5.jpg" alt="Japanese Garden at Fairmount Park"></a><a href="statue.jpg" title="Shady spot" data-gallery><img src="ministatue.jpg" alt="Shady spot"></a><a href="koi.jpg" title="We fed the fish" data-gallery><img src="minikoi.jpg" alt="We fed the fish"></a><a href="ringshot.jpg" title="The ring with flowers" data-gallery><img src="miniringshot.jpg" alt="The ring with flowers"></a><a href="joshgarden1.jpg" title="Thinking about the future" data-gallery><img src="minijoshgarden1.jpg" alt="Thinking about the future"></a></div></p>');
	}
});