$(document).ready(function(){

		eventIndex = 0;
		pageIndex = 0;
		lastIndex = $('.page:last').find('.event:last').index();
	  showButton = {'visibility':'visible'}; 
	  hideButton = {'visibility':'hidden'};
	  
	  function showButtons(){
	    
	    $('.expanding-carousel .next').css(showButton);
      $('.expanding-carousel .prev').css(showButton);
	    
	  }
	  
	  function nextButtonHideShow() {
	    
	    if($('.page:last .active').next().index() == $('.page:last .event:last').index()){
        
          $('.expanding-carousel .next').css(hideButton);
          $('.expanding-carousel .prev').css(showButton);
        
        } else { showButtons() }
	    
	  }
	  
	  function prevButtonHideShow() {
	    
	    if($('.page:first .active').prev().index() == $('.page:first .event:first').index()){
          
        $('.expanding-carousel .prev').css(hideButton);
        $('.expanding-carousel .next').css(showButton);
  
      } else { showButtons() }
	    
	  }
	  
	  function clickButtonHideShow() {
	    
	    if($('.page:last .active').click().index() == $('.page:last .event:last').index()){
        
          $('.expanding-carousel .next').css(hideButton);
          $('.expanding-carousel .prev').css(showButton);
        
        } else if($('.page:first .active').click().index() == $('.page:first .event:first').index()){

            $('.expanding-carousel .prev').css(hideButton);
            $('.expanding-carousel .next').css(showButton);

          } else { showButtons() }
	  }
	  
  if($('.page:first').find('.event:last').index() <= 1){

  	  $('.expanding-carousel .navigation').css({'visibility':'hidden'});

  	}
	
	if($(!'.active')){
		
		$('.event:first').addClass('active');
		
	}
	
	if(lastIndex <= 1) {
	  
	  $('.page:last').addClass('stop');
    $('.page:last').find('.event').addClass('super_active');
	  
	} 
		
	if($('.page:first').index() == pageIndex){
    
    $('.expanding-carousel .prev').css({'visibility':'hidden'});
    
  }
	
	$('.event').find('.box').click(function() { 
	    
	    if(!$(this).parents('.event').hasClass('active') && !$(this).parents('.event').hasClass('super_active')){

        $('.active').removeClass('active', "fast"); 
        
        $(this).parents('.event').addClass('active', "fast");
        
        eventIndex = $(this).parents('.event').index();
        
        clickButtonHideShow()
	    }
	     
      // console.log("pi"+pageIndex);
      // console.log("ei"+eventIndex);
      
	  });
	
	
	$('.img_link').click(function(){
	  
	  if(!$(this).parents('.event').hasClass('active')){
	    
	    $('.active').removeClass('active', "fast");
	    
	    $(this).parents('.event').addClass('active', "fast");
	    
	    eventIndex = $(this).parents('.event').index();
	    
	    return false;
	    
	  } 
	  
	});
	
	$(".next").click(function(){

			animating_count = $(":animated").length;
    
		if (animating_count <= 0){
			
      nextButtonHideShow();
			
      if($('.page.stop .event').hasClass('active')) {
      
        return false;
      
      }
			
			if($('.event:last').hasClass('active')){
			  
				return false;
				
			} else {
				
				eventIndex++
				
			}

			if($('.active').index() != 2){

				$('.active').removeClass('active', "fast").next().addClass('active', "fast");
								
			}
      
			if( eventIndex == 3 ){

			  pageIndex++;
				
				eventIndex = 0;

				currentLeft = -579;
				
				
				$('.stage').animate({'left': currentLeft * pageIndex},"fast");

				$('.panel').has($('li.active').removeClass('active')).parent().next().find('.event').first().addClass('active');
				
			}
			
		}	else {
			
			return false;
			
		}	
    // console.log("pi"+pageIndex);
    // console.log("ei"+eventIndex);
  });

  $(".prev").click(function(){

		animating_count = $(":animated").length;
		
		if (animating_count <= 0){
			
			prevButtonHideShow();
			
			if($('.event:first').hasClass('active')){
		
				return false;
		
			} else{
			
				eventIndex--
			
			}

			if($('.active').index() != 0){

				$('.active').removeClass('active', "fast").prev().addClass('active', "fast");
				
			}
			
		
			if( eventIndex == -1 ){
				
				pageIndex--;
				
				eventIndex = 2;
			
				currentLeft = -579;
				
				$('.stage').animate({'left': currentLeft * pageIndex }, "fast");
			
				$('.panel').has($('li.active').removeClass('active')).parent().prev().find('.event').last().addClass('active');
			
			}
			
		}	else{
			
				return false;
		}
    // console.log("pi"+pageIndex);
    // console.log("ei"+eventIndex);
  });
	
    $('.event').each(function(i){
  	  
  	  active = $('li .active').width();
  	  
  	  if($(!'li .active')){
	
  	    inactiveWidth = $('img',this).width();

	    }
	    
  	  descriptionWidth = active - inactiveWidth - 40;
  	  
		  $('.description',this).css({'width': descriptionWidth, 'left' : inactiveWidth});

	  });
			
});
