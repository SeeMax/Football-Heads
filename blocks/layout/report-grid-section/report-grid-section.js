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
      
        // Get an array of all element heights
        var elementHeights = $('.reportGridTopicArea').map(function() {
          return $(this).outerHeight();
        }).get();
      
        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxHeight = Math.max.apply(null, elementHeights);
      
        // Set each height to the max height
        $('.reportGridContainer').height(maxHeight);
        let otherReports = $(".reportGridTopicArea").not(":eq(0)").find('.singleReportGridReport');
        let otherArrows = $(".singleReportGridNav").not(":eq(0)").find('.gridArrow');
        gsap.set(otherReports, {rotationY:90});
        gsap.set(otherArrows,{y:-15});
        $('.singleReportGridNav').on('click', function(){
          let thisReport = $(this).attr('data-grid-filter-btn');
          let thisArrow = $(this).find('.gridArrow');
          let theArea = $(".reportGridTopicArea[data-grid-filter-area='" + thisReport +"']");
          let tl = gsap.timeline({
            defaults: { // children inherit these defaults
              duration: 0.2,
              ease: "power4.out",
            },
          });
          let theseReports = theArea.find('.singleReportGridReport');
          tl.to('.singleReportGridReport', {rotationY:90}, "allOut");
          tl.to('.reportGridTopicArea',{zIndex:9}, "allOut");
          tl.to('.gridArrow',{y:-15}, "allOut");
          tl.to(thisArrow,{y:0}, "allIn");
          tl.to(theseReports, {duration:0.3, rotationY:0}, "allIn");
          tl.to(theArea, {zIndex:10}, "allIn");
        });
        
        // data-grid-filter-area="<?php echo $topic;?>"
    };
  
    // Initialize each block on page load (front end).
    $(document).ready(function(){
      
      // Make sure it's not the wp-backend
      // if (!$('body').hasClass("wp-admin")) {
        
        $('.report-grid-section').each(function(){
            initializeBlock( $(this) );          
        });      
      // }
    });
  
    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=reports-grid-section', initializeBlock );
    }
  
  })(jQuery);
