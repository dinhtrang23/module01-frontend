function addChar(char) {
    document.getElementById('output').value += char;
  }

  function backspace() {
    let output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
  }