let calculation = localStorage.getItem('data') || '';


function Display(sw){
  if(sw === 5){
 document.getElementById('id-01').innerHTML = calculation;
  }
  else{
    document.getElementById('id-01').innerHTML = 0;
  }

}

function one(){
  calculation += '1';
  Display(5);
}

function two(){
  calculation += '2';
  Display(5);
}

function three(){
  calculation += '3';
  Display(5);
}

function plus(){
  calculation += ' + ';
  Display(5);
}

function four(){
  calculation += '4';
  Display(5);
}

function five(){
  calculation += '5';
  Display(5);
}

function six(){
  calculation += '6';
  Display(5);
}

function minus(){
  calculation += ' - ';
  Display(5);
}

function seven(){
  calculation += '7';
  Display(5);
}

function eight(){
  calculation += '8';
  Display(5);
}

function nine(){
  calculation += '9';
  Display(5);
}

function multi(){
  calculation += ' * ';
  Display(5);
}

function zero(){
  calculation += '0';
  Display(5);
}

function dot(){
  calculation += '.';
  Display(5);
}

function calculate(){
  calculation = eval(calculation);
  localStorage.setItem('data',calculation);
  Display(5);
}

function divide(){
  calculation += '/';
  Display(5);
}

function clearCalculation(){
  calculation = '';
  localStorage.removeItem('data');
  Display();
}



Display();



