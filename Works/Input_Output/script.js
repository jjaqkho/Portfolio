$(document).ready(function() {

  $(".homepagelink").click(function(event) {

    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(150, function() {
      redirectPage(linkLocation);
    });
  });
});

function redirectPage(link) {
  document.location.href = link;
}
