//Spanish   - Hola Mundo
//French    - Bonjour le monde
//German    - Hallo Welt

var langCode = window.prompt('Enter your language code')

if (langCode === 'es') {
    window.document.write('Hola Mundo')
} else if (langCode === 'en') {
    window.document.write('Hello World')
} else if (langCode === 'de') {
    window.document.write('Hallo Welt')
} else if (langCode === 'fr') {
    window.document.write('Bonjour Le Monde')
} else {
    window.document.write('HELLO WORLD')
};
