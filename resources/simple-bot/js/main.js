// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it

var pb = new Pandorabot("aiaas.pandorabots.com", "1409612761147", "chip", "df02842140df124c272ce6909134f7de");

function doTalk() {
  var userInput = document.getElementById("user-input").value;
  document.getElementById("user-input").value = "";
  pb.talk(userInput, function(data) {
    var response = data["responses"];
    document.getElementById("response").innerHTML = response;
    console.log(response);
  });
}
