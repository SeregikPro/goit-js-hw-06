const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
    
input.addEventListener('change', function(event) {   
    text.style.fontSize = this.value + "px";
});

