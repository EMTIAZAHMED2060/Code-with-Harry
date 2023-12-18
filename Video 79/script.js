let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry, this is not a number");
}

let sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum is: ", sum);
} catch (error) {
    console.log("THIS IS AN ERROR");
}
finally
{
    console.log("files are being close and db connection is being closed");
}