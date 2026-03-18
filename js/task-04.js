let counterValue = 0;

const counter = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}
incrementBtn.addEventListener('click', increment);


const decrement = () => {
    counterValue -= 1
    counter.textContent = counterValue;
}
decrementBtn.addEventListener('click', decrement);
