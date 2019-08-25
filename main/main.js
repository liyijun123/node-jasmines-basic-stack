// Write your cade below:
function caclRemaindar(firstNum,secondNum) {
    var bigNum;
    var smallNum;
    if(firstNum<secondNum){
        bigNum = secondNum;
        smallNum = firstNum;
    }else{
        bigNum = firstNum;
        smallNum = secondNum;
    }
    return bigNum%smallNum;
};

function caclSum(array) {
    let result = 0;
    array.forEach(element => {
        result += element;
    });
    return result;
};

function caclSumInConditon(array,num) {
    let result = 0;
    array.forEach(function(item){
        if(item<num){
            result += item;
        }
    })
    return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}