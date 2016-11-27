exports.countDigit= function(n,d){
  if(d==0){
    var total = count0(n);
    return total;

  }else{
    var total=count(n);
    return total;
  }

};

function countUpTo(d){
  var first = 9*((Math.pow(10,d)-1)/9);
  var second= 9*((Math.pow(9,d)-1)/8);
  return first-second;
}
function count0(n){
  var length = Math.log(Math.pow(10,n)) * Math.LOG10E + 1 | 0;
  var total1 = countUpTo(length-1);

  return total1+1;
}

  // Tn=9Tn-1+10^(n-1)
function count(n){
  if(n==1){
    return 1;
  }else{
      return Math.pow(10, n-1)+9*count(n-1);
  }
}
