/**
 * Setup elements
 */
function personalizeHomeJumbotron(id, bgColor, h1Text, pText )
{
  var element = document.getElementById(id),
      container = element.children[0],
      children = container.children;
  element.style.backgroundColor = bgColor;
  children[0].innerHTML = h1Text;
  children[1].innerHTML = pText;
}

/**
 * Evaluate bloomio_group cookie
 * Find value of bloomio_group, run personalization
 */

// Check if page is loaded?
// https://davidwalsh.name/document-readystate

(function() {
  var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_group\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (cookie) {
    this.bloomio_group = cookie; {
    console.info('Cookie found: ', document.cookie);
      if (cookie == 1) {
        // Run loan personalization
        personalizeHomeJumbotron('home-jumbotron','salmon', 'Get a New Ride', 'You seem to be interested in auto loans. It is not the same as the hero on the Auto Loans page, but it is similar. Pretty cool eh?');
        console.info('Cookie is: ', cookie);
      } else if (cookie == 2) {
        // Run services personalization
        personalizeHomeJumbotron('home-jumbotron','yellow', 'Got Direct Deposit?', 'You seem to be interested in services. It is not the same as the hero on the Services page, but it is similar. Pretty cool eh?');
        console.info('Cookie is: ', cookie);
      } else {
        // Do nothing
        console.info('Cookie is: ', cookie);
      }
    }
  }
}());
