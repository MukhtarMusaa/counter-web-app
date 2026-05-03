const display = document.getElementById('mydisplay');

const increase = document.getElementById('myincrease');

const decrease = document.getElementById('mydecrease');

const reset = document.getElementById('reset');

let count = 0;

const MAX_LIMIT = 30;



increase.onclick = function(){

    if(count < MAX_LIMIT){

        count++;

        display.textContent = count;

    }

    else{

        alert("Count cannot exceed 30");

    }

};



decrease.onclick = function(){

    if(count > 0){

        count--;

        display.textContent = count;

    }

    else{

        alert("Count cannot go below 0");

    }

};



reset.onclick = function(){

    count = 0;

    display.textContent = count;

};