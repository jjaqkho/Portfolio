console.log('hello world');

// wait for document to load
$(document).ready(function() {

  // menu click animation
  $('body').css('display', 'none');
  $('body').fadeIn(20);
  $(
    '.imagelink, .aboutlink, .worklink, .contactlink, .resumelink, .BackButtonLink, .newtab, .FrontButtonLink'
  ).click(
    function() {
      $('.weblayout').removeClass('moveright');
      event.preventDefault();
      newLocation = this.href;
      $('body').fadeOut(400, newpage);
    });
  // project click animation
  // $('body').css('display', 'none');    causing glitch in page switch^
  $('body').fadeIn(20);
  $(
    '.typejournalpage, .artconferencepage, .collectionpage, .inputoutputpage, .tourguidepage, .wordmappage, .oasisdesignpage, .passportpage, .infographpage, .appropriationpage'
  ).click(
    function() {
      $('.linkmove').addClass('moverightinfinite');
      $('.moverightinfinite').animate({
        left: -Math.abs(200),
        right: 200
      }, 800, "easeInExpo");
      $('.linkmovetext').addClass('moverightinfinitefast');
      $('.moverightinfinitefast').animate({
        left: -Math.abs(500),
        right: 500
      }, 800, "easeInExpo");
      event.preventDefault();
      newLocation = this.href;
      $('body').fadeOut(900, newpage);
    });

  function newpage() {
    window.location = newLocation;
  }

  function testScroll(ev) {

    if (window.pageYOffset > 25)
      $('.BackButton, .FrontButton').addClass('noopacity');
    else
      $('.BackButton, .FrontButton').removeClass('noopacity');


    if (window.pageYOffset > 100)
      $('.JK, .worktitle, .worktitle2').addClass('noopacity');
    else
      $('.JK, .worktitle, .worktitle2').removeClass('noopacity');

    if (window.pageYOffset > 10)
      $('.BackToTop').addClass('yesopacity');
    else
      $('.BackToTop').removeClass('yesopacity');

    if (window.pageYOffset > 10)
      $('.BackToTopBox').addClass('noopacity');
    else
      $('.BackToTopBox').removeClass('noopacity');
  }

  window.onscroll = testScroll;

  $('.menubutton').click(function() {
    $('.weblayout').toggleClass('moveright');
  });

  $(window).click(function() {
    $('.weblayout').removeClass('moveright');
  });

  $('.menubutton').click(function(event) {
    event.stopPropagation();
  });

  $('.BackToTop').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000, "easeInOutCubic");
  });

  $(".Imageblur1, .Imagetextblur1").hover(function() {
    $('.Imageblur1').toggleClass('blur lightopacity');
    $('.Imagetextblur1').toggleClass('yesopacity');
  });

  $(".Imageblur2, .Imagetextblur2").hover(function() {
    $('.Imageblur2').toggleClass('blur lightopacity');
    $('.Imagetextblur2').toggleClass('yesopacity');
  });

  $(".Imageblur3, .Imagetextblur3").hover(function() {
    $('.Imageblur3').toggleClass('blur lightopacity');
    $('.Imagetextblur3').toggleClass('yesopacity');
  });

  $(".Imageblur4, .Imagetextblur4").hover(function() {
    $('.Imageblur4').toggleClass('blur lightopacity');
    $('.Imagetextblur4').toggleClass('yesopacity');
  });

  $(".Imageblur5, .Imagetextblur5").hover(function() {
    $('.Imageblur5').toggleClass('blur lightopacity');
    $('.Imagetextblur5').toggleClass('yesopacity');
  });

  $(".Imageblur7, .Imagetextblur7").hover(function() {
    $('.Imageblur7').toggleClass('blur lightopacity');
    $('.Imagetextblur7').toggleClass('yesopacity');
  });

  $(".Imageblur8, .Imagetextblur8").hover(function() {
    $('.Imageblur8').toggleClass('blur lightopacity');
    $('.Imagetextblur8').toggleClass('yesopacity');
  });

  $(".Imageblur9, .Imagetextblur9").hover(function() {
    $('.Imageblur9').toggleClass('blur lightopacity');
    $('.Imagetextblur9').toggleClass('yesopacity');
  });

  $(".Imageblur10, .Imagetextblur10").hover(function() {
    $('.Imageblur10').toggleClass('blur lightopacity');
    $('.Imagetextblur10').toggleClass('yesopacity');
  });

  $(".Imageblur11, .Imagetextblur11").hover(function() {
    $('.Imageblur11').toggleClass('blur lightopacity');
    $('.Imagetextblur11').toggleClass('yesopacity');
  });

  $(".Imageblur12, .Imagetextblur12").hover(function() {
    $('.Imageblur12').toggleClass('blur lightopacity');
    $('.Imagetextblur12').toggleClass('yesopacity');
  });

  $(".abouttext").hover(function() {
    $('.abouttext, .abouttextcontainer').addClass('yesopacity');
  });

  $('.zoomin').click(function() {
    $('.InnerCircleDiv, .OuterCircleDiv').addClass('scale');
  });

  $('.zoomout').click(function() {
    $('.InnerCircleDiv, .OuterCircleDiv').removeClass('scale');
  });

  $('.klhover').hover(function() {
    $('.klimage').toggleClass('yesopacity');
  });

  $('.hkhover').hover(function() {
    $('.hkimage').toggleClass('yesopacity');
  });

  $('.nychover').hover(function() {
    $('.nycimage').toggleClass('yesopacity');
  });


  // setInterval(function() {
  //   // toggle the class every five second
  //   $('.meet').toggleClass('bluropacity');
  //   setTimeout(function() {
  //     // toggle back after 1 second
  //     $('.meet').toggleClass('bluropacity');
  //   }, 500);
  // }, 1000);
});
