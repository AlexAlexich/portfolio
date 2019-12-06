$(document).ready(function() {
    $("#meni ul li a").hover(rast, smanjenje)
    $("footer a p").hover(rast, smanjenje)
    $("#social a").hover(rast, smanjenje)
    $("#buttonProvera").hover(button1, button2)


    $('#button1').click(function() {
        $('#lista1').toggle('Slow');

    });
    $('#button2').click(function() {
        $('#lista2').toggle('Slow');
    });

    smena()


    $(":radio").labelauty();
    $("#scrollTop").click(function() {

        $("html").animate({
            scrollTop: 0
        }, 1500);
    });

    $("#scrollTop").hide();
    $(window).scroll(function() {
        let top = $(this)[0].scrollY;

        if (top > 700) {
            $("#scrollTop").show();
        } else {
            $("#scrollTop").hide();
        }
    })

    $("#goToHome").click(function() {
        $("html").animate({
            scrollTop: $("#slider").offset().top - 55
        }, 500);
    })
    $("#goToSkills").click(function() {
        $("html").animate({
            scrollTop: $("#skills").offset().top - 55
        }, 500);
    })
    $("#goToProjects").click(function() {
        $("html").animate({
            scrollTop: $("#projects").offset().top - 55
        }, 500);
    })
    $("#goToAbout").click(function() {
        $("html").animate({
            scrollTop: $("#about").offset().top - 55
        }, 500);
    })
    $("#goToContact").click(function() {
        $("html").animate({
            scrollTop: $("#contact").offset().top - 55
        }, 500);
    })

    $('#meni ul li i').click(function() {
            let vidljiv = $("#meni ul li").find("ul").is(":visible");
            if (vidljiv) {
                $("#meni ul li").find("ul").hide();
            } else {
                $("#meni ul li").find("ul").show();
            }
        })
        //Podestiti da kad je iskljucen i prebaci se na drugu rez ne ne stane



    $('.project').hover(promeneSlika, vracanjeSelika)

})

function smena() {
    var trenutna = $('#photosMe .show');
    var sledeca = trenutna.next().length ? trenutna.next() : trenutna.parent().children(':first');

    trenutna.hide().removeClass('show');
    sledeca.fadeIn().addClass('show');

    setTimeout(smena, 8000);
}

function rast() {

    $(this).animate({
        fontSize: "+=7px",
        paddingLeft: '+=15px'
    }, 200);

    $(this).stop(true, true);
}

function smanjenje() {
    $(this).animate({
        fontSize: "-=7px",
        paddingLeft: '-=15px'
    }, 200)

    $(this).stop(true, true)
}

function button1() {
    $(this).animate({
        width: "+=20px",
    }, 200)
    $(this).stop(true, true);
}

function button2() {
    $(this).animate({
        width: "-=20px",
    }, 200)
    $(this).stop(true, true);
}

function promeneSlika() {
    $(this).animate({
        fontSize: "+=10px",
        padding: '+=20px',
    }, 200);
    $(this).addClass('border')
    $(this).stop(true, true);
}

function vracanjeSelika() {
    $(this).animate({
        fontSize: "-=10px",
        padding: '-=20px',

    }, 200);
    $(this).removeClass('border')
    $(this).stop(true, true);

}