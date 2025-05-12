function firstWord(s) {
    if (s.trim() === '') {
        return '';
    }
    const spaceIndex = s.indexOf(' ');
    if (spaceIndex === -1) {
        return s;
    }
    return s.slice(0, spaceIndex);
}

function showFirstWord() {
    const inputText = document.getElementById('inputText').value;
    const result = firstWord(inputText);
    document.getElementById('result').textContent = `First word: ${result}`;
}
