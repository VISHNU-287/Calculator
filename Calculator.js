let calculation = localStorage.getItem('data') || '';


function Display(){
  document.getElementById('id-01').innerHTML = calculation;
}

function one(){
  calculation += '1';
  Display();
}

function two(){
  calculation += '2';
  Display();
}

function three(){
  calculation += '3';
  Display();
}

function plus(){
  calculation += ' + ';
  Display();
}

function four(){
  calculation += '4';
  Display();
}

function five(){
  calculation += '5';
  Display();
}

function six(){
  calculation += '6';
  Display();
}

function minus(){
  calculation += ' - ';
  Display();
}

function seven(){
  calculation += '7';
  Display();
}

function eight(){
  calculation += '8';
  Display();
}

function nine(){
  calculation += '9';
  Display();
}

function multi(){
  calculation += ' * ';
  Display();
}

function zero(){
  calculation += '0';
  Display();
}

function dot(){
  calculation += '.';
  Display();
}

function calculate(){
  calculation = eval(calculation);
  localStorage.setItem('data',calculation);
  Display();
}

function divide(){
  calculation += '/';
  Display();
}

function clearCalculation(){
  calculation = '0';
  localStorage.removeItem('data');
  Display();
}



Display();



