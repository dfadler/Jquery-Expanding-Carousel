(function($){
  $.fn.expandingCarousel = function(arrOptions){
    var arrDefaults = {
      strContainer: 'expanding-carousel',
      // containerWidth: $this.css('width'),
      boolNavigationActive: true,
      strNavigationContainer: 'navigation',
      strNavigationPrev: 'prev',
      strNavigationNext: 'next',
      strNavigationPosition: 'prepend',
      strWindow: 'window',
      // windowWidth: 'hello world',
      strStage: 'elements',
      strStageElements: 'element',
      strSpeed: 100
    };
    var arrOptions = $.extend(arrDefaults, arrOptions);
      
      na = arrOptions.boolNavigationActive;
      nc = arrOptions.strNavigationContainer;
      np = arrOptions.strNavigationPrev;
      nn = arrOptions.strNavigationNext;
      
      s = arrOptions.strStage;
      
      
    return this.each(function(){

      console.log($(this).find('.' + s));
      // if(na == true){
        $(this).find('.' + s).prepend('
          <ul class="' + nc + '">
            <li class="' + np + '">Prev</li>
            <li class="' + nn  + '">Next</li>
          </ul>
        ');
      }
      
      
    
    });
    
  };
})(jQuery);

