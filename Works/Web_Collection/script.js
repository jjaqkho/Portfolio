console.log('hello world');

// wait for document to load
$(document).ready(function() {

  //  mouse acting as scrolling
  // top and down
  $(document).mousemove(function(e) {
    $('html, body').scrollTop(function(i, v) {
      var h = $(window).height();
      var y = e.clientY - h / 2;
      return v + y * 0.008;
    });
  });
  //left and right
  $(document).mousemove(function(e) {
    $('html, body').scrollLeft(function(i, x) {
      var a = $(window).width();
      var b = e.clientX - a / 2;
      return x + b * 0.008;
    });
  });

  $('.all').click(function() {
    $('.all').toggleClass('show');
    $('.original').toggleClass('imgrevealoriginal');
    $('h1').removeClass('hide');
    $('.animals').removeClass('show');
    $('.onlyanimals').removeClass('imgreveal');
    $('.moon').removeClass('show');
    $('.onlymoon').removeClass('imgreveal');
    $('.star').removeClass('show');
    $('.onlystar').removeClass('imgreveal');
    $('.sun').removeClass('show');
    $('.onlysun').removeClass('imgreveal');
    $('.vertical').removeClass('show');
    $('.onlyvertical').removeClass('imgreveal');
    $('.weapons').removeClass('show');
    $('.onlyweapons').removeClass('imgreveal');
    $('.horizontal').removeClass('show');
    $('.onlyhorizontal').removeClass('imgreveal');
  });

  $('.animals').click(function() {
    $('.animals').toggleClass('show');
    $('.onlyanimals').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.moon').click(function() {
    $('.moon').toggleClass('show');
    $('.onlymoon').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.star').click(function() {
    $('.star').toggleClass('show');
    $('.onlystar').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.sun').click(function() {
    $('.sun').toggleClass('show');
    $('.onlysun').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.weapons').click(function() {
    $('.weapons').toggleClass('show');
    $('.onlyweapons').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.vertical').click(function() {
    $('.vertical').toggleClass('show');
    $('.onlyvertical').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $('.horizontal').click(function() {
    $('.horizontal').toggleClass('show');
    $('.onlyhorizontal').toggleClass('imgreveal');
    $('.all').removeClass('show');
    $('.original').removeClass('imgrevealoriginal');
    $('h1').addClass('hide');
  });

  $(
    '.category1, .category2, .category3, .category4, .category5, .category6, .category7, .category8'
  ).hover(function() {
    $('.shade').toggleClass('showshade');
  });

  $('.zoomin').click(function() {
    $('.flags').addClass('scalebigger');
    $('.flags').removeClass('scale');
  });

  $('.zoomout').click(function() {
    $('.flags').addClass('scale');
    $('.flags').removeClass('scalebigger');
  });

  // $('.shade').hover(function() {
  //   $('h1, .categoryA, .categoryB, .categoryC, .categoryD').toggleClass(
  //     'h1clear');
  // });

  // $(
  //   '.category1, .category2, .category3, .category4, .category5, .category6, .category7, .category8'
  // ).hover(function() {
  //   $('h1, .categoryA, .categoryB, .categoryC, .categoryD').toggleClass(
  //     'h1clear');
  // });


  $('.categoryA, .categoryB, .categoryC, .categoryD').hover(function() {
    $('.shade').toggleClass(
      'showshade');
  });

  // $('.categoryA, .categoryB, .categoryC, .categoryD').hover(function() {
  //   $('.categoryA, .categoryB, .categoryC, .categoryD').toggleClass(
  //     'h1clear');
  // });

});
