const display = document.getElementById('result')
function display_form(input){
    let operators = '-+/*';
    let last_symbol = display.value[display.value.length - 1];
    let error_message = 'ERROR,Infinity,NaN';
    if (error_message.split(',').includes(display.value)){
        display.value = input === '.' ? '0.' : input;
        return;
    }
    if (input === '.'){
        let current_number = display.value.split(/[-+/*]/).pop();
        if (display.value === '' || operators.includes(last_symbol)){
            display.value += '0.';
        }
        else if (!current_number.includes('.')){
            display.value += input;
        }
        return;
    }
    if (operators.includes(input)){
        if (display.value !== "" && !operators.includes(last_symbol)){
            display.value += input;
        }
    }
    else{
        display.value += input;
    }
    return;
}
function clear_display_form(){
    display.value = ''
}
function calculate_value(){
    try{
        display.value = math.evaluate(display.value)
    }
    catch{
        display.value = 'ERROR'
    }
}
function remove_symbol(){
    display.value = display.value.slice(0,-1)
}
