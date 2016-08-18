$(document).ready(function(){
    $("#prev").click(function(){
	    if ($("#product1").css("display")!="none"){
		    $(".jumbotron").css("background",'url("1080-3.jpeg")');
		    $("#overlapimg").attr("src","400-3.jpeg");
        $("#product1").css("display","none");
        $("#product3").css("display","inline");
        }
        else if($("#product3").css("display")!="none"){
	        $(".jumbotron").css("background",'url("1080-2.jpeg")');
	        $("#overlapimg").attr("src","400-2.jpeg");
	        $("#product3").css("display","none");
					$("#product2").css("display","inline");
        }
        else{
	        $("#product2").css("display","none");
	        $(".jumbotron").css("background",'url("1080.jpeg")');
	        $("#overlapimg").attr("src","400.jpeg");
					$("#product1").css("display","inline");
        }
    });
    $("#next").click(function(){
	    if ($("#product1").css("display")!="none"){
		    $(".jumbotron").css("background",'url("1080-2.jpeg")');
		    $("#overlapimg").attr("src","400-2.jpeg");
        $("#product1").css("display","none");
        $("#product2").css("display","inline");
        }
        else if($("#product3").css("display")!="none"){
	        $(".jumbotron").css("background",'url("1080.jpeg")');
	        $("#overlapimg").attr("src","400.jpeg");
	        $("#product3").css("display","none");
					$("#product1").css("display","inline");
        }
        else{
	        $(".jumbotron").css("background",'url("1080-3.jpeg")');
	        $("#overlapimg").attr("src","400-3.jpeg");
	        $("#product2").css("display","none");
					$("#product3").css("display","inline");
        }
    });

});