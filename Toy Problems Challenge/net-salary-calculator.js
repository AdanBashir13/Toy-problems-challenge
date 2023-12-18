// Function to calculate payee
function calcPayee(grossSalary) {
    if (grossSalary <= 24000) {
        return 0.1 * grossSalary;
    } else if (grossSalary >= 24001 && grossSalary <= 32333) {
        return 0.25 * grossSalary;
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
        return 0.3 * grossSalary;
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
        return 0.325 * grossSalary; // Added multiplication with grossSalary
    } else {
        return 0.35 * grossSalary;
    }
}

// Function to calculate NHIF deductions
function calcNhif(baseSalary) {
    if (baseSalary <= 5999) {
        return 150;
    } else if (baseSalary >= 6000 && baseSalary <= 7999) {
        return 300;
    } else if (baseSalary >= 8000 && baseSalary <= 11999) {
        return 400;
    } else if (baseSalary >= 12000 && baseSalary <= 14999) {
        return 500;
    } else if (baseSalary >= 15000 && baseSalary <= 19999) {
        return 600;
    } else if (baseSalary >= 20000 && baseSalary <= 24999) {
        return 750;
    } else if (baseSalary >= 25000 && baseSalary <= 29999) {
        return 850;
    } else if (baseSalary >= 30000 && baseSalary <= 34999) {
        return 900;
    } else if (baseSalary >= 35000 && baseSalary <= 39999) {
        return 950;
    } else if (baseSalary >= 40000 && baseSalary <= 44999) {
        return 1000;
    } else if (baseSalary >= 45000 && baseSalary <= 49999) {
        return 1100;
    } else if (baseSalary >= 50000 && baseSalary <= 54999) {
        return 1200;
    } else if (baseSalary >= 60000 && baseSalary <= 69999) {
        return 1300;
    } else if (baseSalary >= 70000 && baseSalary <= 79999) {
        return 1400;
    } else if (baseSalary >= 80000 && baseSalary <= 89999) {
        return 1500;
    } else if (baseSalary >= 90000 && baseSalary <= 99999) {
        return 1600;
    } else {
        return baseSalary - 1700;
    }
}

// Function to calculate NSSF deductions
function calcNssf(baseSalary) {
    return baseSalary * 0.6;
}

// Function to calculate the Net Salary
function calcNetSalary(baseSalary, benefits) {
    const grossSalary = baseSalary + benefits;
    const payee = calcPayee(grossSalary);
    const nhifDeductions = calcNhif(baseSalary);
    const nssfDeductions = calcNssf(baseSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
}

// Prompt for user to input base salary and benefits
let baseSalaryInput = prompt("Enter your base salary"); // Changed to let
let benefitsInput = prompt("Enter your benefits"); // Changed to let

// Convert user inputs to numbers
const baseSalary = parseFloat(baseSalaryInput);
const benefits = parseFloat(benefitsInput);

// Make function to calculate Net Salary a constant
const netSalary = calcNetSalary(baseSalary, benefits);

// Output the calculations
console.log(`Gross Salary: ${baseSalary + benefits}`);
console.log(`PAYEE (tax): ${calcPayee(baseSalary + benefits)}`); // Changed to use baseSalary + benefits
console.log(`NHIF Deductions: ${calcNhif(baseSalary)}`);
console.log(`NSSF Deductions: ${calcNssf(baseSalary)}`);
console.log(`Net Salary: ${netSalary}`);
