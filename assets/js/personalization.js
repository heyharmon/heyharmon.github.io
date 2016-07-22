/**
 * Init cookies
 *
 */

 // Personalization Group cookie
var groupCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_group\s*\=\s*([^;]*).*$)|^.*$/, "$1");

 // Bloomio Demo Cookie
var demoCompleteCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_demo_complete\s*\=\s*([^;]*).*$)|^.*$/, "$1");

/**
 * Setup dynamic page elements
 *
 */

// Homepage Jumbotron
function personalizeHomeJumbotron(id, bgURL, h1Text, pText )
{
  var element = document.getElementById(id),
      container = element.children[0],
      children = container.children;

  element.style.backgroundImage = bgURL;
  children[0].innerHTML = h1Text;
  children[1].innerHTML = pText;
}

/**
 * Quirksmode Cookie Functions
 */

 // Create cookie
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

// Erase cookie
function eraseCookie(name) {
	createCookie(name,"",-1);
  console.info('Cookie erased: ', name);
}

/**
 * Personalization
 * Evaluate bloomio_group cookie, run personalization
 */
// Setup personalized content data like this: http://jsfiddle.net/bu5Av/2/

(function() {
      if (groupCookie == 1) {
        // Auto Loan personalization
        personalizeHomeJumbotron('home-jumbotron','url("https://meridiacu.com/wp-content/uploads/2016/04/hero-auto-loan-2.jpg?id=778")', 'Get a New Ride', 'You seem to be interested in auto loans. It is not the same as the hero on the Auto Loans page, but it is similar. Pretty cool eh?');
        console.info('Personalization = (1) Auto Loan');
      } else if (groupCookie == 2) {
        // Direct Deposit personalization
        personalizeHomeJumbotron('home-jumbotron','url("https://meridiacu.com/wp-content/uploads/2016/04/hero-courtesy-pay.jpg?id=543")', 'Got Direct Deposit?', 'You seem to be interested in services. It is not the same as the hero on the Services page, but it is similar. Pretty cool eh?');
        console.info('Personalization = (2) Direct Deposit');
      } else {
        // Do nothing
      }
}());
