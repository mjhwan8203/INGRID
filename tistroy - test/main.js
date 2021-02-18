$(function () {
    $('.menuBtn').click(function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
        $('.link').toggleClass('visible');
        $('.mo-link').toggleClass('visible');
        $('.menuTitle').toggleClass('visible');
        });
   
       // $('.link').click(function(ev){
       //     $('.nav-menu').toggleClass('visible');
       // });
    })