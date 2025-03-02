$(document).ready(function() {

     $("#stream1_btn").on(function() {
             $(".stream1").show(); //.hide is the opposite of .show - Slow, medium, fast, miliseconds
             $(".stream1").show("slow");
             $(".stream1").show("medium");
             $(".stream1").show("fast");
             $(".stream1").show(1000);
     });

/*
The jQuery toggle() function is very useful.
It toggles the visibility of an element.
Therefore, if the element is hidden, it will be shown, and, vice-versa, if it is shown, it will be hidden.
It works just like an on/off button.
If you think about using the toggle() function, it does not make much sense to use the function on an element itself.
When the toggled element becomes hidden, you cannot click on it again to make it visible.
So what we usually do is click on an element, such as a button, which toggles a different element.
The slideDown() function slides down a hidden HTML element, so it becomes visible.
As with the show() and hide() functions, you can also set the speed as a parameter to the function.
The opposite to the previous function is the slideUp() function, which hides a visible element by sliding it up.
The slideToggle() function shows an element if it's hidden, or hides it if it's visible.
The fadeIn() function fades in the hidden element.
Like with the show and hide functions, you can also set the speed as a parameter to the function.
The fadeOut() function fades out a visible element.
The fadeToggle() function shows an element if it's hidden, or hides it if it's visible.
The fadeTo() function enables you to fade an HTML element partially in or out, thus making it transparent.
You pass two parameters: the speed, which is in milliseconds; and the opacity, which is between zero and one, which tells you how much you wish to fade the element.
0 is fully transparent (hidden) and 1 is fully opaque (shown).
*/

    /*
     $("#stream1_btn").click(function() { //Acts the same as the below on clicks, just shorter code
     //other uses might be .mouseenter or .mouseleave
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
     */
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

//-----------------Events Challenge
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

//-----------------Effects Challenge
/*
$(document).ready(function() {
    
     $("#card-panel-1").click(function() {
         $("#card-panel-1").hide("slow");
     });
     
     $("#card-panel-2").click(function() {
         $("#card-panel-2").hide("medium");
     });
     
     $("#card-panel-3").click(function() {
         $("#card-panel-3").hide("fast");
     });
     
     $("#card-panel-4").click(function() {
         $("#card-panel-4").hide(3000);
     });
 });
 */


//-----------------Chaining Challenge
 /*
 $(document).ready(function() {
    
    $("button").mouseenter(function() {
        $("button").removeClass("make-red").addClass("make-border");
    });
    
    $("button").mouseleave(function() {
        $("button").removeClass("make-border").addClass("make-red");
    });
});
 */


//-----------------This Challenge 1
/*
$(document).ready(function() {
    
    $("p").click(function() {
        $(this).text("Changed only the text for this paragraph");
    });
    
    $(".card").mouseenter(function() {
        $(this).fadeTo(2000, 0.2).fadeTo(2000,1);
    });
    
});
*/

//-----------------This Challenge 1
/*
$(".module-nav").on("click", function() {
    let allModulesCardsSelector = ".card";
    let thisModuleCardsSelector  = "." + this.id + "-card";

    $(allModulesCardsSelector).removeClass("card-highlight");
    
    $(thisModuleCardsSelector).addClass("card-highlight");
    
});
*/