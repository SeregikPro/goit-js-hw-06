const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");


const onInput = text => {
    spanEl.textContent = text.currentTarget.value;
    if (text.currentTarget.value === '') {
        spanEl.textContent = "Anonymous"
    }
};

inputEl.addEventListener('input', onInput);