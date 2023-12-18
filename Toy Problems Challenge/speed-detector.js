function calcDemeritPoints (speed){
//take the speed of the car as input
const speedOfCar = prompt ("Enter the speed of car");

//change the data type to a number
speedOfCar = Number (speedOfCar);

//check to see if the input is valid
if (isNaN(speedOfCar)){
    console.log("Invalid inpit. Please ennter a valid number");
    return;
}

//assign constant variables to the constant values
const speedLimit= 70;
const pointsPerDemerit = 5;
const limtPoints = 12;

//check to see if speed is within speed limit 
if (speed < speedLimit){
    console.log ("Within speed limit");
    return;
}

//calaculate the demerit points
const demeritPoints = Math.floor((speed - speedlimit) / pointsPerDemerit);

//check to see how many demerit points 
if (demeritPoints >  limtPoints){
    console.log = ("License suspended");
}
else{
    console.log ("Points, " + demeritPoints);
    return;
}
}

//to call function 
calcDemeritPoints(speedOfCar);
