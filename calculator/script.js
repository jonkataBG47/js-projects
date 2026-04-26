const display = document.getElementById('result')
function display_form(input){
    let operators = '-+/*'
    let last_symbol = display.value[display.value.length - 1]
    if (operators.includes(input)){
        if (display.value !== "" && !operators.includes(last_symbol)){
            display.value += input;
        }
    }
    else{
        display.value += input;
    }
}
function clear_display_form(){
    display.value = ''
}
function calculate_value(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = 'ERROR'
    }
}
function remove_symbol(){
    display.value = display.value.slice(0,-1)
}