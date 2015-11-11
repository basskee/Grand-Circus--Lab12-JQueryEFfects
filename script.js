
// I had a non a few of the objectives working for this lab and few that were not working. 
// I sat with a few people that were in the group that you led to go over what was discussed
// and copied their code. I somehow locked myself out of my initial js file via get"admin right," but I will
// work on getting that unlocked


$(document).ready(function(){

	$("li").hover(function(){
		$(this).fadeTo("slow",0.25);
	}, function(){
		$(this).fadeTo("slow",1.0);
	});

	$("li").click(function(){
		$(this).toggleClass("highlight");
		var items= $(this).text();
		if($(this).text()==="") {
			$(this).text("Clicked!");
     	}	else {
			$(this).text("");
		}


	});
		
	
});
















	