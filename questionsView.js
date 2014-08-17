var QuestionsView = Backbone.View.extend({
    el: $('#display'),
    initialize: function(){
        this.render();
        $( "#accordion" ).accordion();
        // $( "#accordion" ).css({"color": "#1E003C"});
    },
    render: function(){
        this.$el.empty().append('<p><h2>Frequently Asked Questions</h2> <div id="accordion"> <h3 class="forcecolor">Where should I park?</h3> <div> <p class="forcecolor"> The Barn has a large lawn/field for people to park in.  There is a small concrete driveway, but we ask that everyone leave that area available for people who have difficulty walking and need to park closer.  Since most people will be staying at the Hampton Inn Owego where our block is booked, we strongly suggest carpooling. </p> </div> <h3 class="forcecolor">What should I wear?</h3> <div> <p class="forcecolor"> October in upstate NY can be very warm, but it also has the potential to get a little chilly.  We recommend that you wear layers.  Men can wear suit jackets that they can remove if it gets too hot, and ladies should bring a coverup in case they get chilly.  We also recommend that people wear shoes that are flat on the bottom or have a small wedge heel at most.  The ceremony and parking will both be on grass, so super spiky stilletos would be a problem! </p> </div> <h3 class="forcecolor">Can I bring a date?</h3> <div> <p class="forcecolor"> We ask that only the people whose names appear on the invitation and response card come to the wedding.  As much as we want everyone to come, we had to have a cutoff point somewhere.  Please don\'t bring any extra guests to the wedding.  If you have any questions for us about invites or extra guests, please feel free to contact us right away. </p> </div> <h3 class="forcecolor">Will the DJ be taking requests at the reception?</h3> <div> <p class="forcecolor"> Our DJ was kind enough to set up a guest request page on his website for us!  Check it out on our Important Information page.  He will be taking requests via the website up until seven days before the wedding (October 4th).  Our DJ will NOT be taking requests at the reception, so if you want to hear something specific, request it now! </p> </div> <h3 class="forcecolor">What should/could I do between the ceremony and the reception?</h3> <div> <p class="forcecolor"> We will be having our cocktail hour and picture taking time in between the ceremony and reception.  Feel free to grab a drink, snack on some tasty foods provided by our caterer, and explore the grounds!  We will also have some lawn games and assorted board games available for people to play! </p> </div> </div> </p>'); } }); /*
                <div class="panel-group" id="accordion">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                          Collapsible Group Item #1
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                      <div class="panel-body">
                        Item 1
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                          Collapsible Group Item #2
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                      <div class="panel-body">
                        Item 2
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                          Collapsible Group Item #3
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                      <div class="panel-body">
                        Item 3
                      </div>
                    </div>
                  </div>
                </div>
*/