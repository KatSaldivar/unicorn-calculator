$(document).ready(function() {

 var inputs=[""]; //stores inputs from user to calulate later

 var totalString; //string to store current input string

 var operators1 = ['+', '-', '*', '/'];//operators array for validation without .

 var operators2 = ['.']; //operators array with the .

 var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //make sure everything is a number

 function getValue(input){

   if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
    console.log("Duplicate '.' ") ;//checks for multiple decimals for error msg
   }
   else if(inputs.length===1 && operators1.includes(input)===false){
       inputs.push(input);//ensures the 1st input is a #, not an operator
     }
   else if (operators1.includes(inputs[inputs.length-1])===false){
     inputs.push(input);//ensures there aren't 2 operators back to back
   }
   else if(nums.includes(Number(input))){//if you press a #, push to arr
     inputs.push(input);
   }
   update();
 }

  function update(){ //shows in display what buttons you push
   totalString=inputs.join("");
    $("#steps").html(totalString);
  }



  function getTotal(){ //evaluates what buttons you pushed and gives the result
    totalString =inputs.join("");
    $("#steps").html(eval(totalString));
  }


  $(".btn").on("click", function(){//clears the calc
    if(this.id==="clear"){
      inputs=[""];
      update();
    }
    else if(this.id==="equals"){//if you press equals, run getTotal
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")===-1){
         getValue(this.id);
         }
         else{
         getValue(this.id);
         }
    }

  });

  });
