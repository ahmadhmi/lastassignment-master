/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? yes, numberOfDays and calculatedCost
// When do they need to be reset or updated? when they are clicked and the price is changed
var costPerDay = 35;
var numberOfDays = 0;
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var full = document.getElementById("full");
var half = document.getElementById("half");
var calculatedCost = document.getElementById("calculated-cost");
var clear = document.getElementById("clear-button");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const days = [monday, tuesday, wednesday, thursday, friday];
function classChange(evt) {
    if (evt.currentTarget.classList.contains("clicked")) {
        evt.currentTarget.classList.remove("clicked");
        numberOfDays -= 1;
        calculation();
        console.log(numberOfDays, calculatedCost);
    }
    else {
        evt.currentTarget.classList.add("clicked");
        numberOfDays += 1;
        calculation();
        console.log(numberOfDays, calculatedCost)
    }
}
for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", classChange);
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function resetAll() {
    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove("clicked");
    }
    numberOfDays = 0;
    calculatedCost.value = 0;
    calculation();
}
clear.addEventListener("click", resetAll);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeRate(evt) {
    if (evt.currentTarget == half) {
        costPerDay = 20;
        half.classList.add("clicked");
        full.classList.remove("clicked");
    }

    else if (evt.currentTarget == full) {
        costPerDay = 35;
        full.classList.add("clicked");
        half.classList.remove("clicked");
    }
    calculation();
}
half.addEventListener("click", changeRate);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", changeRate);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation() {
    calculatedCost.value = numberOfDays * costPerDay;
    calculatedCost.innerHTML = calculatedCost.value;
}

