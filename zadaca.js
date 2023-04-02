const num = "123456789";
let check = 0;
function validateNum(num){
    if (num.length !== 9){
        throw "The phone number is invalid";
    }
    for (let i = 0; i < num.length; i++){
        if (num[i] === '1' || num[i] === '2' || num[i] === '3' || num[i] === '4' || num[i] === '5' || num[i] === '6' || num[i] === '7' || num[i] === '8' || num[i] === '9' || num[i] === '0') {
            console.log();
        }
        else {
            throw "The phone number is invalid!";
            break;
        }
    }
}
try{
    validateNum(num);
    console.log("Successfully entered number");
}
catch (error){
    console.log(error);
}