var inputValue = document.getElementById('abc');
function getval(value){
inputValue.value += value;
}

function calculate(){
    inputValue.value = eval(inputValue.value)
}
function clearAll(){
    inputValue.value = "";
}