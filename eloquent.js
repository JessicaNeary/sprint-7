Minimum

function min(a, b){
    if(a<b){
        return a;
      }
    else{ 
        return b;
      }
  }

Recursion

  function isEven(num){
   if(num == 0){
     return true;
   }
   else if(num <= 1){
    return false;
   }
   else{
     isEven(num-2);
   }
  }
  
Bean Counting 

  function countBs(string){
    var count = 0;
    for(var i=0;i<string.length; i++){
      var letter = string.charAt(i).toLowerCase();
      if(letter == 'b'){
        count++;
      }
    }
    return count;
  }

  function countChar(string, x){
    var count = 0;
    for(var i=0;i<string.length; i++){
      var letter = string.charAt(i).toLowerCase();
      if(letter == x){
        count++;
      }
    }
    return count;
  }
