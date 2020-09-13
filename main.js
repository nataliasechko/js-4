function clearLeft() {
  const divLeft = document.querySelectorAll(".label-area")[0];
  const textElement = divLeft.querySelector("textarea");
  divLeft.removeChild(textElement);
  const newTextarea = document.createElement("textarea");
  divLeft.appendChild(newTextarea);
}

function convertText() {
  const pEl = document.createElement("p");
  const something = document.getElementById("textarea").value;
  pEl.innerHTML = something;
  const parentElement = document.querySelectorAll("div.right-text span")[0];
  if (!parentElement) {
    return;
  }
  parentElement.appendChild(pEl);
}

function clearRight() {
  const divRight = document.querySelectorAll("div.right-text")[0];
  const spanElement = divRight.querySelector("span");
  divRight.removeChild(spanElement);
  const newSpanRight = document.createElement("span");
  divRight.appendChild(newSpanRight);
}

function colorBlue() {
  const colorText = document.getElementsById('addedText');
  colorText.classList.add('blue'); 
  colorText.classList.remove('red'); 
}

function colorRed() {
  const colorText = document.getElementsById('addedText');
  colorText.classList.add('red');  
  colorText.classList.remove('blue');
}
