// 1. Leap Year Checker
function isLeapYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        return "Please enter a valid year";
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

// 2. Weather Clothing Adviser
function getClothingAdvice(temperature, isRaining) {
    let advice = "You should wear: ";
    
    // Temperature based advice
    if (temperature < 0) {
        advice += "heavy winter coat, gloves, scarf, and warm boots";
    } else if (temperature < 10) {
        advice += "warm coat and long sleeves";
    } else if (temperature < 20) {
        advice += "light jacket or sweater";
    } else if (temperature < 30) {
        advice += "t-shirt and light pants";
    } else {
        advice += "light, breathable clothing";
    }

    // Rain based advice
    if (isRaining) {
        advice += ", and don't forget an umbrella or raincoat!";
    }

    return advice;
} 