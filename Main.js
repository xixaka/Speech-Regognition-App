var recognition = new window.webkitSpeechRecognition();
function start(){
    recognition.start();
}
recognition.onresult = function(e){
console.log(e);
document.getElementById("voice_output").value = e["results"][0][0]["transcript"]
speak();
}
function speak(){
    var speech = new SpeechSynthesisUtterance("Taking your selfie in five seconds");
    var secret = new SpeechSynthesisUtterance("You found a secret. congrats.");
    var speech_wrong = new SpeechSynthesisUtterance("Bruh. You have to say, take my selfie. Only then will I take your selfie. Got it?");
    if(document.getElementById("voice_output").value == "take my selfie"){
        window.speechSynthesis.speak(speech);
        console.log(speech);
    }
    if(document.getElementById("voice_output").value == "secret"){
        window.speechSynthesis.speak(secret);
        console.log(secret);
    }
    else{
        window.speechSynthesis.speak(speech_wrong);
        console.log(speech_wrong);
    }
}

//
// SpeechSynthesisUtterance
// window.speechSynthesis
// e < results < 0 < 0 < transcript 