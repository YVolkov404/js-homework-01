/**
 * Write a script that changes the background colors of the <body> element via inline style
 * when clicking on button.change-color and outputs the color value to span.color.
 *
 * <div class="widget">
 *   <p>Background color: <span class="color">-</span></p>
 *   <button type="button" class="change-color">Change color</button>
 * </div>
 *
 * Use the getRandomHexColor function to generate a random color.
 */

const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", onBtnClickChangeColor);

function onBtnClickChangeColor () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
}
