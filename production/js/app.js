/**
 * Created by georgrokita on 05.02.17.
 */


/*
 $(document).ready(function(){

 $( ".h_menu" ).click(function() {

 alert("Hello2");
 $( "#nav_menu_icon" ).fadeToggle( "slow", "linear" ).delay(50);
 $( "#nav_closing_icon" ).fadeToggle( "slow", "linear" );
 });

 });
 */


function navAddEventhandler() {
    
    $(".h_menu").on('click',function(){

        var CloseIcon = $( "#nav_closing_icon" );
        var MenuIcon = $( "#nav_menu_icon" );
        var NavContentBox = $(".nav_item_box");

        CloseIcon.toggle();
        MenuIcon.toggle();
        NavContentBox.toggle();

    });

    return true;
}


function zapApp() {
    navAddEventhandler();
    return true;
}
