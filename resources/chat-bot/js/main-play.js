// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it

var pb = new Pandorabot("aiaas.pandorabots.com", "1409612761147", "chip", "df02842140df124c272ce6909134f7de");
var outputArea = document.getElementById("chat-output");

function doTalk() {
  var userInput = document.getElementById("user-input").value;
  document.getElementById("user-input").value = "";

  outputArea.innerHTML = outputArea.innerHTML + (`
    <div class='user-message'>
      <div id='single-user-message' class='message'>
        ${userInput}
      </div>
    </div>
  `);

  pb.talk(userInput, function(data) {
    var response = data["responses"];
    console.log(response);
    setTimeout(function() {
      outputArea.innerHTML = outputArea.innerHTML + (`
        <div class='bot-message'>
          <div id='single-bot-message' class='message'>
            ${response}
          </div>
        </div>
      `);
    }, 400);
  });

}
