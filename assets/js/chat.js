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
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Nice to meet you, ${v.first_name}!</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 400);
              // Bubble 7
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">In this demo I’m going to show you how I dynamically personalize content for my website users.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 1400);
              // Bubble 8
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">What is dynamic personalization?</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 4000);
              // Bubble 9
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Dynamic personalization means that I change website content for individual users based on their interests--on the fly, automagically. [magic wand emoji]</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 5000);
              // Bubble 10
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Personalization is cool because users are more likely to interact with content that’s highly relevant to them.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 8000);
              // Bubble 11
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">At the end of the day, personalization helps you get more members and borrowers.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 11000);
              // Bubble 12
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Plus, personalization makes you a marketing rockstar.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 15000);
              // Bubble 13
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">[Picture of Tonya]]</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 17000);
              // Bubble 14
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">(This is one of BloomCU’s actual clients. She loves KISS, so we sent her some Starchild gear to wear at the office. [winky emoji])</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 21000);
              // Bubble 15
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Let me show you how dynamic personalization works.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 24000);
              // Bubble 16
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Let’s pretend you want to get an auto loan.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 26000);
              // Bubble 17
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Notice that my homepage banner says nothing about auto loans.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 30000);
              // Bubble 18
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">That’s about to change.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 36000);
              // Bubble 19
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">${v.first_name}, go to the [auto loan page].</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 39000);
          // First name does not exist
          } else if (v.first_name === undefined) {
              // Bubble
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Hi! Welcome to BloomCU’s personalization demo!</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 400);
              // Bubble
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">My name is Chip and I’m the brain of this website.</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 1200);
              // Ask for users name
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">What’s your name?</div></div>`);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 2600);
              // Show first name input, use doFirstName function
              setTimeout(function() {
                  output_area.innerHTML = output_area.innerHTML + (`
                    <div id="profile" class="chat-input">
                        <p>What is your first name?</p>
                        <input id="user-first-name-input" type="text" onkeydown="if (event.keyCode == 13) { doFirstName(); }" placeholder="My first name is..." autocomplete="off" />
                    </div>
                    `);
                  var afterBotResponse = document.getElementById("output-area");
                  afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
              }, 3600);
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

    // // Handle bots response
    // setTimeout(function() {
    //     output_area.innerHTML = output_area.innerHTML + (`<div class="message"><img src="${botAvatar}"><div class="bubble">Got it!</div></div>`);
    //     var afterBotResponse = document.getElementById("output-area");
    //     afterBotResponse.scrollTop = afterBotResponse.scrollHeight;
    // }, 800);

    // Save users first name to Firebase
    var deviceFirstNameRef = devicesRef.child(bloomio_user_device);
    deviceFirstNameRef.update({
        first_name: user_first_name_input
    });

};
