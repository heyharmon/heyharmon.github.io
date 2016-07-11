var botAvatar = "https://firebasestorage.googleapis.com/v0/b/bloomchat-5987d.appspot.com/o/clients%2Fbloomcu%2Fmedia%2Fbot-avatar.jpg?alt=media&token=db67be0f-423c-431c-b91d-3288083bfc35",
    root = "https://bloom-io.firebaseio.com/",
    pb = new Pandorabot("aiaas.pandorabots.com", "1409612761147", "chip", "df02842140df124c272ce6909134f7de"),
    that = "",
    init = true;
    output_area = document.getElementById("output-area");

/**
 * GREETING FUNCTION
 * If first_name is undefined, display generic greeting
 * Else, display personalized greeting
 */
(function() {
      // Greet visitor based on existance of first_name
      var deviceRef = new Firebase(firebaseRoot + "/devices/" + bloomio_user_device);
      deviceRef.on('value', function (snapshot) {
          var v = snapshot.val();
          // First name exists
          if (v.first_name !== undefined) {
              // Personalize greeting
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Nice to see you again ${v.first_name}</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 100);
              // Ask about auto loan
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Are you still buying a new car?</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 2200);
            // First name does not exist
          } else if (v.first_name === undefined) {
              // First greeting
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Can I help you get a new car?</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 1000);
              // Second greeting
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Btw my name is Chip</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 3400);
              // Ask for users name
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">What is your name?</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 4800);
              // Show first name input, use doFirstName function
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<input id="user-first-name-input" type="text" onkeydown="if (event.keyCode == 13) { doFirstName(); }" placeholder="My First Name is..." autocomplete="off" />`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 5800);
          }
      });

}());


/**
 * Pandorabot talk function
 * Display user input, send to bot, display response.
 * Then, push chat session to Firebase.
 */
function doTalk() {
    var date = Firebase.ServerValue.TIMESTAMP;

    // Handle users input
    var user_input = document.getElementById("user-input").value;
    document.getElementById("user-input").value = "";
    output_area.innerHTML = output_area.innerHTML + (`<div class="message right"><div class="bubble">${user_input}</div></div>`);
    var afterUserInput = document.getElementById("output-area");
    afterUserInput.scrollTop = afterUserInput.scrollHeight;

    // Pandorabot talk function
    pb.talk(user_input, function(data) {
        var response = data["responses"],
            sessionid = data.sessionid,
            client_name = pb.bloomio_user_device;

        // Display bot response
        setTimeout(function() {
            output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">${response}</div></div>`);
            var afterBotResponse = document.getElementById("output-area");
            afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
        }, 1000);

        // Create a new chat session in Firebase
        if (init === true) {
            var session = new Firebase(root + "/chats/" + sessionid);
            session.set({
                user_device: bloomio_user_device,
                date: date
            });
            init = false;
        }

        // Push chat interactions to Firebase
        var conversation = new Firebase(root + "/chats/" + sessionid + "/conversation");
        conversation.push({
            date: date,
            user_input: user_input,
            that: that,
            response: response
        });

        // Store last response for next interaction
        that = response[response.length - 1];
    });
};

/**
 * Save users first name to firebase
 */
function doFirstName() {

    // Handle users input
    var user_first_name_input = document.getElementById("user-first-name-input").value;
    document.getElementById("user-first-name-input").remove();
    output_area.innerHTML = output_area.innerHTML + (`<div class="message right"><div class="bubble">My first name is ${user_first_name_input}</div></div>`);
    var afterUserInput = document.getElementById("output-area");
    afterUserInput.scrollTop = afterUserInput.scrollHeight;

    // Handle bots response
    setTimeout(function() {
        output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Got it!</div></div>`);
        var afterBotResponse = document.getElementById("output-area");
        afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
    }, 800);

    // Save users first name to Firebase
    var deviceFirstNameRef = devicesRef.child(bloomio_user_device);
    deviceFirstNameRef.update({
        first_name: user_first_name_input
    });

};
