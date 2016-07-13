/**
 * Setup elements
 */
function personalizeHomeJumbotron(id, newColor)
{
 var Element = document.getElementById(id);
 Element.style.backgroundColor = newColor;
}

/**
 * Page view cookie
 * Read cookies, if match run personalization
 */
(function() {
  var pb = this;
  var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_auto_loan\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (cookie) {
      pb.bloomio_auto_loan = cookie; {
        // Run personalization
        personalizeHomeJumbotron('home-jumbotron','salmon');
      }
  }
}());
