(function($){
    /**
     * initializeBlock
     *
     * Adds custom JavaScript to the block HTML.
     *
     * @date    15/4/19
     * @since   1.0.0
     *
     * @param   object $block The block jQuery element.
     * @param   object attributes The block attributes (only available when editing).
     * @return  void
     */
    var initializeBlock = function( $block ) {
      
        // Get the Tallest Of The Divs for Height
        var elementHeights = $('.teamGridTopicArea').map(function() {
          return $(this).outerHeight();
        }).get();
        var maxHeight = Math.max.apply(null, elementHeights);  
        $('.teamGridContainer').height(maxHeight);

        // Set The First Grid In Top - Clicks Take t form there
        $('.teamGridTopicArea').first().css('z-index', '11');

        // Flip The Team Cards to Correspond with the Right Nav Item
        let otherteams = $(".teamGridTopicArea").not(":eq(0)").find('.singleteamGridteam');
        let otherArrows = $(".singleteamGridNav").not(":eq(0)").find('.gridArrow');
        gsap.set(otherteams, {rotationY:90});
        gsap.set(otherArrows,{y:-15});
        $('.singleteamGridNav').on('click', function(){
          let thisteam = $(this).attr('data-grid-filter-btn');
          let thisArrow = $(this).find('.gridArrow');
          let theArea = $(".teamGridTopicArea[data-grid-filter-area='" + thisteam +"']");
          let tl = gsap.timeline({
            defaults: { // children inherit these defaults
              duration: 0.2,
              ease: "power4.out",
            },
          });
          let theseteams = theArea.find('.singleteamGridteam');
          tl.to('.singleteamGridteam', {rotationY:90}, "allOut");
          tl.to('.teamGridTopicArea',{zIndex:9}, "allOut");
          tl.to('.gridArrow',{y:-15}, "allOut");
          tl.to(thisArrow,{y:0}, "allIn");
          tl.to(theseteams, {duration:0.3, rotationY:0}, "allIn");
          tl.to(theArea, {zIndex:10}, "allIn");
        });
        
        $('.singleteamGridteam').on('click', function(){
          let thisPost = $(this).attr('data-team-popup');
          ajaxPost(thisPost)
          
        });

        $('.singleteamPopupClose').on('click', function(){
          singleteamPopupClose();  
        });
        

        
        let ajaxPost = (linkID) => {  
          $.ajax({          
              url: '/wp-json/wp/v2/board_advisor/'+linkID,                                       
              success: function( data ) { 
                console.log(data);
                // Member or Advisor:`+data.acf.board_member_or_advisor+`            
                
                // Clear Info First    
                $('.team-pop-up-text .contact-info').html('');   
                // Populate Data
                $('.team-pop-up-image').html(`
                  <div class="popup-image-mask background-image-section" 
                  style="background-image:url(`+data.acf.profile_image.sizes.medium+`)"> 
                  </div>
                `)
                $('.team-pop-up-text h3').html(data.title.rendered);
                $('.team-pop-up-text h5').html(data.acf.job_description);
                $('.team-pop-up-text p').html(data.acf.board_bio);
                if((data.acf.linkedin_profile).length > 0){
                  $('.team-pop-up-text .contact-info').append('<a href='+data.acf.linkedin_profile+'><i class="fab fa-linkedin"></i></a>');
                }
                if((data.acf.team_email_address).length > 0){
                  $('.team-pop-up-text .contact-info').append('<a href=mailto:'+data.acf.team_email_address+'><i class="fas fa-envelope"></i></a>');
                }
                if((data.acf.twitter_profile).length > 0){
                  $('.team-pop-up-text .contact-info').append('<a href='+data.acf.twitter_profile+'><i class="fab fa-twitter"></i></a>');
                }
                // Reveal After Data is In
                showPopup();
              },
              cache: false
          }); 
        }

        let showPopup = () => {
          let tl = gsap.timeline();
          tl.set('.singleteamPopup', {zIndex:50});
          tl.set('.teamGridOverlay', {zIndex:14});
          tl.to('.singleteamPopup', {opacity:1}, "comein");
          tl.to('.teamGridOverlay', {opacity:0.8}, "comein");
          tl.to(window, {scrollTo: {y:".singleteamPopup", offsetY:200}}, "comein");
          
        }

        let singleteamPopupClose = () => {
          let tl = gsap.timeline();
          tl.to('.singleteamPopup', {opacity:0}, "comeout")
          tl.to('.teamGridOverlay', {opacity:0}, "comeout")
          tl.set('.singleteamPopup', {zIndex:-1});
          tl.set('.teamGridOverlay', {zIndex:-1});
        }
    };
  







    // Initialize each block on page load (front end).
    $(document).ready(function(){
      
      // Make sure it's not the wp-backend
      if (!$('body').hasClass("wp-admin")) {
        
        $('.team-grid-section').each(function(){
            initializeBlock( $(this) );          
        });      
      }
    });
  
    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=teams-grid-section', initializeBlock );
    }
  
  })(jQuery);
