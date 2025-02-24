const input = document.querySelector('input');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            input.value = '';
        } else if (value === '<') {
            input.value = input.value.slice(0, -1);
        } else if (value === '+/-') {
            if (input.value) {
                input.value = String(-parseFloat(input.value));
            }
        } else if (value === '=') {
            input.value = eval(input.value.replace('%', '/100'));
        } else {
            input.value += value;
        }
    });
});
