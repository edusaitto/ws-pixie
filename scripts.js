$(document).ready(() => {
    $('#card-contato').hide()
    if($(window).width() <= 576) {
        $('#about-2').remove()
    }
    $(".nav-link").on("click", function(){
        $('.navbar-collapse').collapse('hide'); 
    });
})

let card_contact_hide = true

function cardTurn() {
    if(card_contact_hide) {
        $('#card-principal').addClass('card-principal-animate')
        setTimeout(() => {
            $('#card-principal').hide()
            $('#card-contato').show()
            $('#card-contato').addClass('card-contato-animate') 
            setTimeout(() => {
                $('#card-principal').removeClass('card-principal-animate')
                $('#card-contato').removeClass('card-contato-animate')  
            }, 650) 
        }, 650)
         
    }
    if(card_contact_hide == false) {
        $('#card-contato').addClass('card-principal-animate') 
        setTimeout(() => {
            $('#card-contato').hide()
            $('#card-principal').show()
            $('#card-principal').addClass('card-contato-animate') 
            setTimeout(() => {
                $('#card-principal').removeClass('card-contato-animate')
                $('#card-contato').removeClass('card-principal-animate')  
            }, 650) 
        }, 650)  
    }
    card_contact_hide = !card_contact_hide
}