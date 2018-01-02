/**
 * Init cookies
 *
 */

 // Personalization Group cookie
var groupCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_group\s*\=\s*([^;]*).*$)|^.*$/, "$1");

 // Bloomio Demo Cookie
var stageOneCompleted = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_stage_one_complete\s*\=\s*([^;]*).*$)|^.*$/, "$1");

 // Bloomio Demo Cookie
var demoCompleteCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_demo_complete\s*\=\s*([^;]*).*$)|^.*$/, "$1");

 // Name Cookie
var firstNameCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_first_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

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

  // If personalization is successful, Store the impression in session object
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
        personalizeHomeJumbotron('home-jumbotron','url("img/hero-auto-loan.jpg")', 'Get $300 <br/>towards your new ride!', 'The best fake auto loans in the world. For real.');
        console.info('Personalization = (1) Auto Loan');
      } else if (groupCookie == 2) {
        // Membership personalization
        personalizeHomeJumbotron('home-jumbotron','url("img/hero-membership.jpg")', 'Get $100 <br/>when you join us!', 'Just because we’re fake doesn’t mean we’re superficial. Join our fake family today.');
        console.info('Personalization = (2) Membership');
      } else {
        // Do nothing
      }
}());
