document.addEventListener('DOMContentLoaded', function () {
const voiceButton = document.getElementById('voiceButton');
const transcriptionDiv = document.getElementById('textdata');

voiceButton.addEventListener('click',firstclick);
// firstclick function
function firstclick()
{
    let mk="hey i am salman khan what can i do for you";
            texttopeach(mk);
            
            setTimeout(startVoiceChat, 3000);  
  
}
// speech function
function texttopeach(texts)
 {
    var msg = new SpeechSynthesisUtterance();
        msg.text = texts;
    window.speechSynthesis.speak(msg);
}

// text recognition

function startVoiceChat() {
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-GB';

// start function
 recognition.onstart = function () {
 transcriptionDiv.textContent ='Voice chat started';
            
};

recognition.onresult = function (event) {
      let result = event.results[0][0].transcript;
            
            if(result=="hello")
            {
                let value="hello my name is salman khan"
               texttopeach(value);
               startVoiceChat()
            }
            else if(result=="big fan")
            {
                let value="thank you"
               texttopeach(value);
               startVoiceChat()
            }
            else if(result=="what do you like")
            {
                let value="i like killing animals"
               texttopeach(value);
               startVoiceChat()
            }
            
           
        };

        recognition.onerror = function (event) {
            console.error('Error during voice chat', event.error);
        };

        recognition.onend = function () {
            transcriptionDiv.textContent ='Voice chat ended';
            let value="ok my shutdowning in 2 seconds";
            texttopeach(value);
            transcriptionDiv.textContent ='click to start again'

        };

        recognition.start();
    }
});