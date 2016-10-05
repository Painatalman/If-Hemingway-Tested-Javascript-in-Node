// NOTE: let us get an override for testing this in nodejs, for there is no window.alert in node
var alert = require('node-notify');

//Here I am, brain the size of a planet, and they ask me to write Javascript
module.exports = function kevinTheNumberMentioner(_) {
  l=[];
  /* mostly harmless */ with (l) {

    //Sorry about all this, my babel fish has a headache today...
    for (ll=!+[]+!![];ll<_+(+!![]);ll++) {
      lll=+!![];

      while(ll%++lll);
        //I've got this terrible pain in all the semicolons down my right-hand side
        (ll==lll)&&push(ll);
      }
      forEach(alert); // the original line is forEach(alert), changed it for nodejs compatibility... it is however more in-character with alert

  }

  // you're really not going to like this
  return [!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]];
}
