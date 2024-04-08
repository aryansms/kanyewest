const textElement = document.getElementById('text');
const text = 'SOURCES            ...            LOADING             //            KANYE WEST IMAGE: PHOTO BY JAMEL TOPPIN ON FORBES // CAR CRASH IMAGE: LAWBYYOURSIDE // KANYE MAD AT INTERVIEWER: GMA NEWS // ALL KANYE ALBUM COVERS: SPOTIFY // AUDIO FOR EACH KANYE ALBUM: YOUTUBE. // ALL FAIR USE EXCEPTIONS. NO MONEY IS MADE FROM THIS PAGE. // MADE WITH 💚 :)';
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust speed as needed (milliseconds)
    }
} 

type();
