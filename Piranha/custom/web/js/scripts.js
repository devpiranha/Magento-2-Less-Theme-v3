require([
  'jquery',
  'bootstrap',
  'slick'
], function ($) {

  $ = jQuery.noConflict();

  $(window).ready(function () {
      console.log('Loading Resources...................100%');
  });
  
  $('.navbar-toggler').addClass('collapsed');



  $('[data-toggle="tooltip"]').tooltip()



  if($(window).width() >= 1200){
      $('.nav-item').hover(function(){
          $(this).addClass('show');
          $(".show .dropdown-menu").addClass("show");

        },function(){
          $(this).removeClass('show');
          $(".dropdown-menu").removeClass("show");
    });

  };








});
