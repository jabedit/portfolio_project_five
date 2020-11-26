//mixitUp

var mixer = mixitup('.grid-portfolio-container');

//Scrolify

 $(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,

          });
        });
//

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0";
}



//smooth scroll

$(function(){
    $('.menu-item a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
        
        return 0;
    })
})
