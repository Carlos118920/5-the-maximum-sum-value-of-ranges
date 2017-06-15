function maxSum(arr,range){
var biggestSum = -99999999;
  for(var i = 0; i < range.length; i++){
    var temp = 0;
    for(var j = range[i][0]; j <= range[i][1]; j++){
      temp += arr[j]
    }
    if(temp > biggestSum){
      biggestSum = temp;
    }
  }
  return biggestSum;
}
