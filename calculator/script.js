const display = document.getElementById('result')
function display_form(input){
    display.value += input
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