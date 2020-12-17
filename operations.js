function insert(num){
   document.form.textview.value = document.form.textview.value + num 
}

function equal(){
   var exp = document.form.textview.value;
   if(exp){
      document.form.textview.value = eval(exp)
   }   
}

function c(){
   document.form.textview.value = "";
}

function del(){
   var exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0,exp.length-1);
}

function sqrt(num){
   var sq = document.form.textview.value;
   document.form.textview.value = Math.sqrt(sq)
}

//Trigonometry

function sin(num){
   var sinn =  document.form.textview.value;
   document.form.textview.value = Math.sin(sinn)
}

function cos(num){
   var cosn =  document.form.textview.value;
   document.form.textview.value = Math.cos(cosn)
}

function tan(num){
   var tann =  document.form.textview.value;
   document.form.textview.value = Math.tan(tann)
}


//Inverse

function sinh(num){
   var sinhn =  document.form.textview.value;
   document.form.textview.value = Math.sinh(sinhn)
}

function cosh(num){
   var coshn =  document.form.textview.value;
   document.form.textview.value = Math.cosh(coshn)
}

function tanh(num){
   var tanhn =  document.form.textview.value;
   document.form.textview.value = Math.tanh(tanhn)
}


//Logatihm
function ln(num){
   var logv =  document.form.textview.value;
   document.form.textview.value = Math.log(logv)
}

function ln10(num){
   var numb =  document.form.textview.value;
   document.form.textview.value = Math.log10(numb)
}