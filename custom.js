$(document).ready(function(){

    $('#rootwizard').bootstrapWizard();
    $('#rootwizard1').bootstrapWizard();

    $('ul.slimmenu').slimmenu(
        {
            resizeWidth: '800',
            collapserTitle: 'Main Menu',
            easingEffect:'easeInOutQuint',
            animSpeed:'medium',
            indentChildren: true,
            childrenIndenter: '&raquo;'
        });

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

});



   