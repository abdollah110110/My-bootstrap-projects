
$(document).ready(function() {
});
alert( "ready!" );

$('.navbar-toggler').click(function(e){
    e.preventDefault();
    $('#sidebar').toggleClass('transform-out');
});