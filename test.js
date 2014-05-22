$(document).ready(function(){
		
	alert ("ok");
	var arr = [ [0,0],  [75,0], [150,0], [225,0], [0,75], [75,75], [150,75], [225,75], [0,150], [75,150], [150,150], [225,150], [0,225], [75,225], [150,225], [225,225] ];
	
	var coords_shuffle_index = Math.floor((Math.random() * 15) + 1);
	var coords_shuffle_direction = (Math.floor((Math.random() * 2)+1))-1;
	
	
	
	for(var i = 0; i<arr.length; i++){
		
		
		if((i+1) == 16){
			
			txt += '<a id="blank" class="blank" style="margin-left: '+arr[i][0]+'px; margin-top:'+arr[i][1]+'px;">&nbsp;</a>';
			
		}else{
			
			txt += '<a id="square_'+(i+1)+'" class="square ui-draggable" style="margin-left: '+arr[i][0]+'px; margin-top:'+arr[i][1]+'px;">'+(i+1)+'</a>';
			
		}
		
	}
	
	document.getElementById('wrap').innerHTML = txt;
	
	$(".square").on("touchstart", function(event){
		//console.log($(this).attr("id"));	
		var square = $(this);
			
			square.css("z-index", "1000");
			
			
			
			var square_x_position = parseInt(square.css("margin-left"));
			var square_y_position = parseInt(square.css("margin-top"));
			
			var blank_x_position = parseInt($("#blank").css("margin-left"));
			var blank_y_position = parseInt($("#blank").css("margin-top"));
		
			
			
			
			/* IS ABOVE ONE BLOCK */
			
			if(square_y_position == (blank_y_position-75) && square_x_position == blank_x_position){
				
				$(this).css("margin-top", blank_y_position+'px');
				$("#blank").css("margin-top", (blank_y_position-75)+'px');
				
				
				
			}
			
			/* IS ABOVE TWO BLOCK */
			
			if(square_y_position == (blank_y_position-150) && square_x_position == blank_x_position){
				
				square.css("margin-top", (blank_y_position-75)+'px');
				square.addClass("active");
				$("#blank").css("margin-top", (blank_y_position-150)+'px');
				
				$(".square").each(function(){
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))+75) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)+75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			/* IS ABOVE THREE BLOCK */
			
			
			
			if(square_y_position == (blank_y_position-225) && square_x_position == blank_x_position){
				
				square.css("margin-top", (blank_y_position-150)+'px');
				square.addClass("active");
				$("#blank").css("margin-top", (blank_y_position-225)+'px');
				
				$(".square").each(function(){
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))+150) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						var y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)+75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))+75) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)+75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			
			
			
			
			
			
			
			
			/* IS BELOW ONE POSITION */
			
			if(square_y_position == (blank_y_position+75) && square_x_position == blank_x_position){
				
				$(this).css("margin-top", blank_y_position+'px');
				$("#blank").css("margin-top", (blank_y_position+75)+'px');
			}
			
			
			
			
			/* IS BELOW TWO POSITION */
			
			if(square_y_position == (blank_y_position+150) && square_x_position == blank_x_position){
				
				square.css("margin-top", (blank_y_position+75)+'px');
				square.addClass("active");
				$("#blank").css("margin-top", (blank_y_position+150)+'px');
				
				$(".square").each(function(){
					
					
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))-75) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)-75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			
			/* IS BELOW THREE POSITION */
			
			if(square_y_position == (blank_y_position+225) && square_x_position == blank_x_position){
				
				square.css("margin-top", (blank_y_position+150)+'px');
				square.addClass("active");
				$("#blank").css("margin-top", (blank_y_position+225)+'px');
				
				$(".square").each(function(){
					
					
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))-150) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)-75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
					
					if(parseInt($(this).css("margin-top")) == (parseInt($("#blank").css("margin-top"))-75) && parseInt($(this).css("margin-left")) == blank_x_position && !$(this).hasClass("active")){
						console.log ("ok"+$(this).attr("id"));
						
						y_pos_new = $(this).css("margin-top").replace("px","");
						y_pos_new = parseInt(y_pos_new)-75;
						
						$(this).css("margin-top", y_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			
			
			
			
			
			
			/* IS LEFT SIDE */
			
			if(square_x_position == (blank_x_position-75) && square_y_position == blank_y_position){
				
				$(this).css("margin-left", blank_x_position+'px');
				$("#blank").css("margin-left", (blank_x_position-75)+'px');
			}
			
			
			
			
			
			
			
			
			
			/* IS LEFT TWO POSITION */
			
			if(square_x_position == (blank_x_position-150) && square_y_position == blank_y_position){
				
				square.css("margin-left", (blank_x_position-75)+'px');
				square.addClass("active");
				$("#blank").css("margin-left", (blank_x_position-150)+'px');
				
				$(".square").each(function(){
					
					
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))+75) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)+75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			/* IS LEFT THREE POSITION */
			
			if(square_x_position == (blank_x_position-225) && square_y_position == blank_y_position){
				
				square.css("margin-left", (blank_x_position-150)+'px');
				square.addClass("active");
				$("#blank").css("margin-left", (blank_x_position-225)+'px');
				
				$(".square").each(function(){
					
					
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))+150) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)+75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
					
					
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))+75) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)+75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			
			
			
			
			
			
			
			/* IS RIGHT SIDE */
			
			if(square_x_position == (blank_x_position+75) && square_y_position == blank_y_position){
				
				$(this).css("margin-left", blank_x_position+'px');
				$("#blank").css("margin-left", (blank_x_position+75)+'px');
			}
			
			
			
			/* IS RIGHT TWO POSITION */
			
			if(square_x_position == (blank_x_position+150) && square_y_position == blank_y_position){
				
				square.css("margin-left", (blank_x_position+75)+'px');
				square.addClass("active");
				$("#blank").css("margin-left", (blank_x_position+150)+'px');
				
				$(".square").each(function(){
				
				
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))-75) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)-75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			/* IS RIGHT THREE POSITION */
			
			if(square_x_position == (blank_x_position+225) && square_y_position == blank_y_position){
				
				square.css("margin-left", (blank_x_position+150)+'px');
				square.addClass("active");
				$("#blank").css("margin-left", (blank_x_position+225)+'px');
				
				$(".square").each(function(){
				
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))-150) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)-75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
					
					
					if(parseInt($(this).css("margin-left")) == (parseInt($("#blank").css("margin-left"))-75) && parseInt($(this).css("margin-top")) == blank_y_position && !$(this).hasClass("active")){
						console.log ("ok ltp "+$(this).attr("id"));
						
						x_pos_new = $(this).css("margin-left").replace("px","");
						x_pos_new = parseInt(x_pos_new)-75;
						
						$(this).css("margin-left", x_pos_new+'px');
						
					}
					
				
				});
				
			}
			
			
			
			
			
			$(".square").removeClass("active");
	});
	
	
});

