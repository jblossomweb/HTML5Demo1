$(document).ready(function() {

// GLOBAL

	// global click class
	$("*").mouseup(function(){
      $(this).removeClass('click');
    }).mousedown(function(){
      $(this).addClass('click');
    });
	
	// global hover class
	$("*").hover(function() {
		$(this).addClass('hover');
	  },function() {
		$(this).removeClass('hover');
	  });
  
  
  
  // ELEMENTS
  

// toggle active item
	$("#content .group .item .pricing .button").click(function() {
		if($(this).parent(".pricing").parent(".item").hasClass("active")) {
			// make inactive (zip up details)
			$(this).children("img").rotate({duration:200,animateTo:0});
			$(this).parent(".pricing").parent(".item").removeClass("active");
			$(this).parent(".pricing").parent(".item").children(".details").hide(200);
			
			if(!$(this).parent(".pricing").parent(".item").parent(".group").children(".item").hasClass("active")) {
				$(this).parent(".pricing").parent(".item").parent(".group").removeClass('active');
			}
			
		} else {
			// activate (expand details)
			$(this).children("img").rotate({duration:200,animateTo:90});
			$(this).parent(".pricing").parent(".item").addClass("active");
			$(this).parent(".pricing").parent(".item").children(".details").show(200);
			
			$(this).parent(".pricing").parent(".item").parent(".group").addClass('active');
		}
		
	  });

	
  
  
  
  
}); //document.ready