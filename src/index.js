module.exports = function switchItUp(number){
    switch(number){
        case 0:
        return "Zero";
        case 1:
        return "one";
        case 2:
        return "two";
        case 3:
        return "three";
        case 4:
        return "four";
        case 5:
        return "five";
        case 6:
        return "six";
        case 7:
        return "seven";
        case 8:
        return "eight";
        case 9:
        return "nine";
        default:
        return "";
    }
}

module.exports = function switchThemUp(number){
    switch(number){
        case 0:
        return "";
        case 1:
        return "";
        case 2:
        return "twenty";
        case 3:
        return "thirty";
        case 4:
        return "fourty";
        case 5:
        return "fifty";
        case 6:
        return "sixty";
        case 7:
        return "seventy";
        case 8:
        return "eighty";
        case 9:
        return "ninety";
        default:
        return "";
    }
}

module.exports = function switchThemDown(number){
    switch(number){
        case 0:
        return "";
        case 1:
        return "eleven";
        case 2:
        return "twelve";
        case 3:
        return "thirteen";
        case 4:
        return "fourteen";
        case 5:
        return "fifteen";
        case 6:
        return "sixteen";
        case 7:
        return "seventeen";
        case 8:
        return "eighteen";
        case 9:
        return "nineteen";
        default:
        return "";
    }
}

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
