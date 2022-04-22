let counterValue = 0;
const btnValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
    counterValue--;
    btnValue.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue++;
    btnValue.textContent = counterValue;
});
