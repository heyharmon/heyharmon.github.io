var pb = new Pandorabot("aiaas.pandorabots.com", "1409612761147", "chip", "df02842140df124c272ce6909134f7de");
var outputArea = document.getElementById("chat-messages");

function doTalk() {
  var userInput = document.getElementById("user-input").value;
  document.getElementById("user-input").value = "";

  outputArea.innerHTML = outputArea.innerHTML + (`
  	<div class="message right">
  		<div class="bubble">
  			${userInput}
  		</div>
  	</div>
  `);
  // Scroll to bottom after user chat
  var afterUserChat = document.getElementById("chat-messages");
  afterUserChat.scrollTop = afterUserChat.scrollHeight;

  pb.talk(userInput, function(data) {
    var response = data["responses"];
    console.log(response);
    setTimeout(function() {
      outputArea.innerHTML = outputArea.innerHTML + (`
      	<div class="message">
  				<img src="https://firebasestorage.googleapis.com/v0/b/bloomchat-5987d.appspot.com/o/clients%2Fbloomcu%2Fmedia%2Fbot-avatar.jpg?alt=media&token=db67be0f-423c-431c-b91d-3288083bfc35" />
  				<div class="bubble">
  					${response}
  		    </div>
        </div>
      `);
      // Scroll to bottom after bot chat
      var afterBotChat = document.getElementById("chat-messages");
      afterBotChat.scrollTop = afterBotChat.scrollHeight;
    }, 400);
  });

}
