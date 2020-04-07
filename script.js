const BUTTONS = [
    {code: "Backquote", en: "`", ru: 'ё', EN: "~", RU: "Ё"},
    {code: "Digit1", en: "1", ru: '1', EN: "!", RU: '"'},
    {code: "Digit2", en: "2", ru: '2', EN: "@", RU: "'"},
    {code: "Digit3", en: "3", ru: '3', EN: "#", RU: "№"},
    {code: "Digit4", en: "4", ru: '4', EN: "$", RU: ";"},
    {code: "Digit5", en: "5", ru: '5', EN: "%", RU: "%"},
    {code: "Digit6", en: "6", ru: '6', EN: "^", RU: ":"},
    {code: "Digit7", en: "7", ru: '7', EN: "&", RU: "?"},
    {code: "Digit8", en: "8", ru: '8', EN: "*", RU: "*"},
    {code: "Digit9", en: "9", ru: '9', EN: "(", RU: "("},
    {code: "Digit0", en: "0", ru: '0', EN: ")", RU: ")"},
    {code: "Minus", en: "-", ru: '-', EN: "_", RU: "_"},
    {code: "Equal", en: "=", ru: '=', EN: "+", RU: "+"},
    {code: "Backspace", en: "Back", ru: 'Back', EN: "Back", RU: "Back"},
    {code: "Tab", en: "Tab", ru: 'Tab', EN: "Tab", RU: "Tab"},
    {code: "KeyQ", en: "q", ru: 'й', EN: "Q", RU: "Й"},
    {code: "KeyW", en: "w", ru: 'ц', EN: "W", RU: "Ц"},
    {code: "KeyE", en: "e", ru: 'у', EN: "E", RU: "У"},
    {code: "KeyR", en: "r", ru: 'к', EN: "R", RU: "К"},
    {code: "KeyT", en: "t", ru: 'е', EN: "T", RU: "Е"},
    {code: "KeyY", en: "y", ru: 'н', EN: "Y", RU: "Н"},
    {code: "KeyU", en: "u", ru: 'г', EN: "U", RU: "Г"},
    {code: "KeyI", en: "i", ru: 'ш', EN: "I", RU: "Ш"},
    {code: "KeyO", en: "o", ru: 'щ', EN: "O", RU: "Щ"},
    {code: "KeyP", en: "p", ru: 'з', EN: "P", RU: "З"},
    {code: "BracketLeft", en: "[", ru: 'х', EN: "{", RU: "Х"},
    {code: "BracketRight", en: "]", ru: 'ъ', EN: "}", RU: "Ъ"},
    {code: "Backslash", en: "\\", ru: '\\', EN: "|", RU: "/"},
    {code: "Caps", en: "Caps", ru: 'Caps', EN: "Caps", RU: "Caps"},
    {code: "KeyA", en: "a", ru: 'ф', EN: "A", RU: "Ф"},
    {code: "KeyS", en: "s", ru: 'ы', EN: "S", RU: "Ы"},
    {code: "KeyD", en: "d", ru: 'в', EN: "D", RU: "В"},
    {code: "KeyF", en: "f", ru: 'а', EN: "F", RU: "А"},
    {code: "KeyG", en: "g", ru: 'п', EN: "G", RU: "П"},
    {code: "KeyH", en: "h", ru: 'р', EN: "H", RU: "Р"},
    {code: "KeyJ", en: "j", ru: 'о', EN: "J", RU: "О"},
    {code: "KeyK", en: "k", ru: 'л', EN: "K", RU: "Л"},
    {code: "KeyL", en: "l", ru: 'д', EN: "L", RU: "Д"},
    {code: "Semicolon", en: ";", ru: 'ж', EN: ":", RU: "Ж"},
    {code: "Quote", en: "'", ru: 'э', EN: '"', RU: "Э"},
    {code: "Enter", en: "Enter", ru: 'Enter', EN: 'Enter', RU: "Enter"},
    {code: "ShiftLeft", en: "Shift", ru: 'Shift', EN: "Shift", RU: "Shift"},
    {code: "KeyZ", en: "z", ru: 'я', EN: "Z", RU: "Я"},
    {code: "KeyX", en: "x", ru: 'ч', EN: "X", RU: "Ч"},
    {code: "KeyC", en: "c", ru: 'с', EN: "C", RU: "С"},
    {code: "KeyV", en: "v", ru: 'м', EN: "V", RU: "М"},
    {code: "KeyB", en: "b", ru: 'и', EN: "B", RU: "И"},
    {code: "KeyN", en: "n", ru: 'т', EN: "N", RU: "Т"},
    {code: "KeyM", en: "m", ru: 'ь', EN: "M", RU: "Ь"},
    {code: "Comma", en: ",", ru: 'б', EN: "<", RU: "Б"},
    {code: "Period", en: ".", ru: 'ю', EN: ">", RU: "Ю"},
    {code: "Slash", en: "/", ru: '.', EN: "?", RU: ","},
    {code: "ShiftRight", en: "Shift", ru: 'Shift', EN: "Shift", RU: "Shift"},
    {code: "Space", en: " ", ru: ' ', EN: " ", RU: " "},
];


const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.autofocus = true;

const section = document.createElement('section');
section.className = 'slider';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(textarea);
document.body.append(keyboard);

let lang;
let caps = false;
let KEYS = [];

function CreateButtons(array) {
    for (let i = 0; i < array.length; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        key.id = array[i].code;
        if (lang === 'ru') {
            if (caps === false) {
                key.innerHTML = array[i].ru
            } else {
                key.innerHTML = array[i].RU
            }

        } else {
            if (caps === false) {
                key.innerHTML = array[i].en
            } else {
                key.innerHTML = array[i].EN
            }

        }
        keyboard.append(key);
        KEYS = document.querySelectorAll('.keys');
    }
}

CreateButtons(BUTTONS);