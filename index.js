var digitalClock = {
  time:Math.round( Date.now() / 1000 ),
  startTicking: function(){
    // this.time;
    setInterval(this.time++,1000);
  }
};

function censor(word,phrase) {
  return phrase.replace(RegExp(word, 'g'),'BLEEP');
}

var violenceCensor = censor.bind(null,'violence');
var drugsCensor = censor.bind(null,'drugs');
