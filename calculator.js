let input = document.querySelector('.calculator-input');
let result = document.querySelector('.calculator-result');
let operators = ['+', '-', '*', '/'];

function appendValue(value) {
  if (value === '.') {
    if (input.value.includes('.')) return;
    if (input.value === '') input.value = '0';
  }
  input.value += value;
}

function calculateResult() {
  if (input.value === '') return;
  if (operators.includes(input.value[input.value.length - 1])) return;
  result.value = eval(input.value);
}

function clearInput() {
  input.value = '';
  result.value = '';
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') calculateResult();
});

input.addEventListener('input', function(e) {
  if (e.inputType === 'deleteContentBackward' && input.value === '') {
    result.value = '';
  }
});
