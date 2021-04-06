function minMaxAvg(arr){
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0]; 

  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  return [min, max, sum / arr.length]
}

console.log(minMaxAvg([3,6,1,7,9,2,4]))
console.log(minMaxAvg([2,1,3]))