let text = `<button class="purple">...</button>`;
let speed = 50;
let i = 0;
let loading = false

function writeCode() {
  if (i < text.length) {
    document.getElementById('code').innerText += text.charAt(i);
    i++;
    setTimeout(writeCode, speed);
  } else {
    loading = true;
    generateButton();
  }
}

function generateButton() {
  if (loading) {
    document.getElementById('result').innerHTML = `Loading...`;
    setTimeout(() => {
      document.getElementById('result').innerHTML = `<button class="purple">Sarthak</button>`
    }, speed*10)
  }
}