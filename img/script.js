$(document).ready(function() {
    $("#stream1_btn").click(function() { //Acts the same as the below on clicks, just shorter code
     //other uses might be .mouseenter or .mouseleave
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

/*
These are examples from the challenge:
$(document).ready(function() {
    $("p").click(function() {
       $("p").css("color","red"); 
    });
    
    $("h2").hover(function() {
       $("h2").css("background","lightblue"); 
    });
    
    $(".card-panel").mouseenter(function() {
       $("body").css("background-color","black");
    });
    
    $(".card-panel").mouseleave(function() {
       $("body").css("background-color","#e1e2e2");
    });
});
*/