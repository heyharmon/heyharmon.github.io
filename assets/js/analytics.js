var firebaseRoot = new Firebase("https://bloom-io.firebaseio.com/"),
    usersRef = firebaseRoot.child('users'),
    devicesRef = firebaseRoot.child('devices'),
    pageViewsRef = firebaseRoot.child('page_views');


/**
 * Find device cookie, save new page view
 * else, generates a new cookie, user, device, and page view
 */
(function() {
  var pb = this;
  var deviceCookie = document.cookie.replace(/(?:(?:^|.*;\s*)bloomio_user_device\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (deviceCookie) {
    console.info('bloomio_user_device = ', deviceCookie);
      pb.bloomio_user_device = deviceCookie; {
        // Send new page view to Firebase
        var newPageView = new Firebase(firebaseRoot + "/page_views/" + bloomio_user_device);
        newPageView.push({
            path: window.location.pathname,
            arrived_at: Firebase.ServerValue.TIMESTAMP
        });
      }
  } else {
    console.info('bloomio_user_device not found');
      // Generate new cookie
      var c = Math.round(Math.random() * 1000001);
      document.cookie = "bloomio_user_device=" + c;
      pb.bloomio_user_device = c;
      console.info('Created bloomio_user_device = ', pb.bloomio_user_device);

      // Save new user
      var newUser = usersRef.push();
      newUser.set({
          name: "",
          email: ""
      });

      // Store the users' id
      var user_id = newUser.name();

      // Save new device
      var newDevice = devicesRef.child(bloomio_user_device);
      newDevice.set({
          user_id: user_id,
          device_agent: navigator.userAgent
      });

      // Save first page view
      var firstPageView = pageViewsRef.child(bloomio_user_device).push();
      firstPageView.set({
          path: window.location.pathname,
          arrived_at: Firebase.ServerValue.TIMESTAMP
      });

  }
}());
