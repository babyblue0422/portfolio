// JavaScript Document


$(function(){
	$(".s_navlist").hide();
	$(".hamburger-menu").click(function(){
		$(this).toggleClass("open");
		$(".s_navlist").slideToggle( "800", function() {
			
			})
		
		})
	})