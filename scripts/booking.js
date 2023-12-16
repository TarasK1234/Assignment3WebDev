/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var numberOfDays = 0;
var clearButton = document.getElementById('clear-button');
var dayButtons = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function DayButtonClick() {
    if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');
        numberOfDays++;
        recalcTotalCost();
    }
}dayButtons.forEach(function (dayButton) {
    dayButton.addEventListener('click', DayButtonClick);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clButtonClick() {
    dayButtons.forEach(function (dayButton) {
        dayButton.classList.remove('clicked');
        });
    numberOfDays = 0;
    recalcTotalCost();
}

clearButton.addEventListener('click', clButtonClick);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayButtonClick() {
    numberOfDays = 0; 
    recalcTotalCost(20);
}

halfDayButton.addEventListener('click', halfDayButtonClick);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayButtonClick() {
    numberOfDays = 0; 
    recalcTotalCost(35);
}

fullDayButton.addEventListener('click', fullDayButtonClick);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalcTotalCost(rate) {
    var numberOfDays = document.querySelectorAll('.day-selector li.clicked').length;
    var totalCost = rate * numberOfDays;


    calculatedCostElement.innerHTML = totalCost.toString();
}