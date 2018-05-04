console.log ("script is working");

$('.navbar-nav').find('a').on('click', function(e){
  $('.navbar-toggler').trigger('click');
});
