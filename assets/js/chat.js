var botAvatar = "https://firebasestorage.googleapis.com/v0/b/bloomchat-5987d.appspot.com/o/clients%2Fbloomcu%2Fmedia%2Fbot-avatar.jpg?alt=media&token=db67be0f-423c-431c-b91d-3288083bfc35",
    root = "https://bloom-io.firebaseio.com/",
    pb = new Pandorabot("aiaas.pandorabots.com", "1409612761147", "chip", "df02842140df124c272ce6909134f7de"),
    that = "",
    init = true,
    output_area = document.getElementById("output-area");

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
        }, 600);

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
