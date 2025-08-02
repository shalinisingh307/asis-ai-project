let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    //speakInput.rate = 1;
    //speakInput.pitch = 1;
    speakInput.volume = 1;
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () => {
    speakFunc("hello");
    greetingFunc();
}

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        speakFunc("Good morning sir,How can i help you!");
    } else if (hour >= 12 && hour < 16) {
        speakFunc("Good afternoon sir,How can i help you!");
    } else {
        speakFunc("Good evening sir,How can i help you!");
    }
}
const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = '<i class="fa-solid fa-microphone-lines-slash"></i>';

        }
        recognition.start();
    } else {
        alert("Your browser does not support voice input !");
    }

}

btn.onclick = () => {
    box.classList.add("btn-box");
    btn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>';
    startVoiceInput();
}
const handleCommands = (command) => {
    console.log(command);

    if (command.includes("hello") || command.includes("hey") || command.includes("hi")) {
        speakFunc("Hello sir,Hown I Help You !");
    } else if (command.includes("who are you") || command.includes("developed") || command.includes("How are you?"))

    {
        speakFunc("I am developed by All Group Member of G10 From B I T, AN open ai. I am here to help you with various tasks and provide you with accurate and helpful information.");
    } else if (command.includes("open youtube chhanel") || command.includes("youtube") || command.includes("channel")) {
        speakFunc("open youtube channel");
        window.open("https://www.youtube.com/search?q={searchTerm}");
    } else if (command.includes("open google") || command.includes("search") || command.includes("google")) {
        speakFunc("open google");
        let searchTerm = command.split(" ").slice(2).join(" ");
        window.open(`https://www.google.com/search?q={searchTerm}`);
    } else if (command.includes("open stack overflow") || command.includes("stackoverflow")) {
        speakFunc("open stack overflow");
        window.open("https://stackoverflow.com/");
    } else if (command.includes("open instagram") || command.includes("instagram")) {
        speakFunc("open instagram");
        window.open("https://www.instagram.com/");
    } else if (command.includes("open twitter") || command.includes("twitter")) {
        speakFunc("open twitter");
        window.open("https://www.twitter.com/");
    } else if (command.includes("open linkedin") || command.includes("linkedin")) {
        speakFunc("open linkedin");
        window.open("https://www.linkedin.com/");
    } else if (command.includes("open github") || command.includes("github")) {
        speakFunc("open github");
        window.open("https://www.github.com/");
    } else if (command.includes("calculator") || command.includes("cal")) {
        speakFunc("open calculator");
        window.open("calculator://");
    } else if (command.includes("open chat gpt") || command.includes("caht gpt")) {
        speakFunc("open chat gpt");
        window.open("https://openai.com/chatgpt/");
    } else if (command.includes("tell me time") || command.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' });
        speakFunc(time);
    } else if (command.includes("open facebook") || command.includes("facebook")) {
        speakFunc("open facebook");
        window.open("https://www.facebook.com/");
    } else if (command.includes("open whatsapp") || command.includes("whatsapp")) {
        speakFunc("open whatsapp");
        window.open("https://web.whatsapp.com/");

    } else if (command.includes("open youtube") || command.includes("youtube")) {
        speakFunc("open youtube");
        window.open("https://www.youtube.com/");
    } else {
        speakFunc('This is,What i found on internet regarding');
        window.open(`https://www.google.com/search?q=${command}`);
    }


}