document.addEventListener("DOMContentLoaded", () =>{

    const grid = document.querySelector(".grid"),
          diceNumDisplay = document.querySelector("#dice-num-display"),
          roll = document.querySelector(".roll"),
          totalDisplay = document.querySelector("#total");

    let diceNum = diceNumDisplay.value;
    
    //update the diceNum variable whenever the user enters a number value and hide any error messages
    diceNumDisplay.addEventListener("input", () => {
        diceNum = diceNumDisplay.value;
        $("[data-toggle='popover']").popover("hide");
    })
    //generate dice when user clicks 'roll' or presses enter
    roll.addEventListener("click", () => {
        rollDice();        
    })

    document.addEventListener("keypress", event => {
        if(event.keyCode === 13){
            rollDice();
        }
    })

    function rollDice(){
       //check whether the number of dice entered is within limits
       if(diceNum < 1 || diceNum > 9){ 
        $("[data-toggle='popover']").popover({title:"Invalid Number", content:"Please enter a number between 1 and 9"});
        $("[data-toggle='popover']").popover("show");
        return;
       }
       //clear necessary variables
       grid.innerHTML = "";
       totalDisplay.innerHTML = ""; 
       var diceCollection = "";
       var total = 0;
       //generate seperate dice rolls
        for(var i = 0; i < diceNum; i++){
            //generatre a random number between 1 and 6
            num = Math.floor((Math.random() * 6) + 1)
            //add up the total of all dice rolls
            total += num;
            //display dice images depending on the number generated
            if(num === 1){
                diceCollection = `<i class="fas fa-dice-one"></i>`;
            } else if(num === 2){
                diceCollection = `<i class="fas fa-dice-two"></i>`;
            } else if(num === 3){
                diceCollection = `<i class="fas fa-dice-three"></i>`;
            } else if(num === 4){
                diceCollection = `<i class="fas fa-dice-four"></i>`;
            } else if(num === 5){
                diceCollection = `<i class="fas fa-dice-five"></i>`;
            } else if(num === 6){
                diceCollection = `<i class="fas fa-dice-six"></i>`;
            }
    
            grid.innerHTML += diceCollection;
            
        }
        //display the total to the user
        totalDisplay.innerHTML = `Total: ${total}`;
    }

})