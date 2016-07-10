/**
 * Device/User
 */
var $device = $('#device');
var $thisUser = $('#thisUser');
var deviceRef = new Firebase(firebaseRoot + "/devices/" + bloomio_user_device);
deviceRef.once('value', function (snapshot) {
  var v = snapshot.val();
  $device.prepend(
  '<li>Name: ' + v.first_name + '</li>' +
  '<li>Email: ' + v.email + '</li>' +
  '<li>User Id: ' + v.user_id + '</li>' +
  '<li>Device: ' + v.device_agent + '</li>'
  );
});

/**
 * Recent page views
 */
var $recentPageViews = $('#recent-page-views');
// Query 3 past visitors, from the end of dataset.
var recentPageViewsRef = new Firebase(firebaseRoot + "/page_views/" + bloomio_user_device).limit(2);
recentPageViewsRef.on('child_added', function (snapshot) {
  var n = snapshot.name();
  var v = snapshot.val();
  $recentPageViews.prepend(
  '<li id="past-visitor' + n + '">' +
    '<ul>' +
      '<li>Page: ' + v.path + '</li>' +
      '<li>Date/Time: ' + new Date(v.arrived_at) + '</li>' +
    '</ul>' +
  '</li>'
  );
});
