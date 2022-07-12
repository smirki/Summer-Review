console.log("Javascript Calculator")

document.getElementById('answer').readOnly = true;
let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');

let screenValue = '';
for( item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        } 
        else if (buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}

document.addEventListener("keydown", function(event){
    console.log(event.which);
    if(event.shiftKey==57){
        event.key = '(';
    }
    else if(event.shiftKey==48){
        event.key = ')';
    }
    else if(event.shiftKey==53){
        event.key = '%';
    }
    else if(event.shiftKey==88){
        screenValue += '*';
        screen.value = screenValue;
    }
})
