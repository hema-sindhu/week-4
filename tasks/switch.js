function printDayMessage(day) {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Start of the work week!");
            break;
        case 'tuesday':
            console.log("It's Tuesday, keep going!");
            break;
        case 'wednesday':
            console.log("Halfway through the week!");
            break;
        case 'thursday':
            console.log("Almost there!");
            break;
        case 'friday':
            console.log("It's Friday, the weekend is near!");
            break;
        case 'saturday':
            console.log("Enjoy your weekend!");
            break;
        case 'sunday':
            console.log("Rest and recharge for the week ahead!");
            break;
        default:
            console.log("Invalid day of the week!");
            break;
    }
}

const day1 = 'Monday';
const day2 = 'Wednesday';
const day3 = 'Sunday';
const day4 = 'Friday';

printDayMessage(day1); 
printDayMessage(day2); 
printDayMessage(day3); 
printDayMessage(day4); 