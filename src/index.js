module.exports = function toReadable (number) {
    if(number === 0){
        return 'zero';
    }
    let strNum = number.toString();
    let strNumRealLen = strNum.length;
    strNum = strNum.padStart(3, "0");
    let resultStr = "";
    let resultHundreds = "";
    let resultDecimals = "";
    let resultOnes = "";
    let it = {
        "0": "",
        '1': "one",
        '2': "two",
        '3': "three",
        '4': "four",
        '5': "five",
        '6': "six",
        '7': "seven",
        '8': "eight",
        '9': "nine"
    };
    let them = {
        '0': "",
        '1': "",
        '2': "twenty",
        '3': "thirty",
        '4': "forty",
        '5': "fifty",
        '6': "sixty",
        '7': "seventy",
        '8': "eighty",
        '9': "ninety"
    };
    let auf = {
        '0': "ten",
        '1': "eleven",
        '2': "twelve",
        '3': "thirteen",
        '4': "fourteen",
        '5': "fifteen",
        '6': "sixteen",
        '7': "seventeen",
        '8': "eighteen",
        '9': "nineteen"
    };
    switch(strNumRealLen){
        case 3:
        resultHundreds += it[strNum[0]] + ' hundred';
        case 2:
        resultDecimals += them[strNum[1]];
        case 1:
        if(strNum[1] === '1'){
            resultOnes += auf[strNum[2]];
        }
        else{
            resultOnes += it[strNum[2]];
        }
        break;
        default:
            resultStr = 'sex';
    }
    resultStr = `${resultHundreds}${(resultHundreds === "") || (resultDecimals === "") ? resultDecimals : " " + resultDecimals}` +
            `${resultDecimals === "" || resultOnes === "" ? resultHundreds === "" || resultOnes === "" ? resultOnes : " " + resultOnes : " " + resultOnes}`;
    return resultStr; 
}
