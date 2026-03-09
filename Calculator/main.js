const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let displayInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.opacity = "0.7";
        setTimeout(() => {
            button.style.opacity = "1";
        }, 150);

        let internalValue = button.getAttribute("data-value") || button.innerText;
        let displayValue = button.innerText;

        if(displayValue === "C"){
            currentInput = "";
            displayInput = "";
            display.value = "";
        }
        else if(displayValue === "DEL"){
            currentInput = currentInput.slice(0,-1);
            displayInput = displayInput.slice(0,-1);
            display.value = displayInput;
        }
        else if(displayValue === "="){
            try{
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
                displayInput = currentInput;
            }catch{
                display.value = "Error";
                currentInput = "";
                displayInput = "";
            }
        }
        else if(displayValue === "%"){
            if(currentInput !== ""){
                let match = displayInput.match(/(\d+\.?\d*)$/);
                if(match){
                    let lastNumber = parseFloat(match[0]);
                    let percentage = lastNumber / 100;
                    currentInput += percentage;
                    displayInput += "%";
                    display.value = displayInput;
                }
            }
        }
        else{
            currentInput += internalValue;
            displayInput += displayValue;
            display.value = displayInput;
        }
    });
});