function calcDemeritPoints(speed) {
    // Take the speed of the car as input
    const speedOfCar = prompt("Enter the speed of car");

    // Change the data type to a number
    const speedOfCarNum = Number(speedOfCar);

    // Check to see if the input is valid
    if (isNaN(speedOfCarNum)) {
        console.log("Invalid input. Please enter a valid number");
        return;
    }

    // Assign constant variables to the constant values
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const limitPoints = 12;

    // Check to see if speed is within speed limit
    if (speedOfCarNum < speedLimit) {
        console.log("Within speed limit");
        return;
    }

    // Calculate the demerit points
    const demeritPoints = Math.floor((speedOfCarNum - speedLimit) / pointsPerDemerit);

    // Check to see how many demerit points
    if (demeritPoints > limitPoints) {
        console.log("License suspended");
    } else {
        console.log("Points: " + demeritPoints);
        return;
    }
}

// Call function with a sample speed value (you can modify this)
calcDemeritPoints();
